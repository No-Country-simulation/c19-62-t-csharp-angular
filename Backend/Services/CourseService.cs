using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class CourseService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<List<CourseGetDto>> GetAll(){
            try{
                List<Course>course=await  _context.Courses.ToListAsync();

                if(course.Count==0){
                    return new List<CourseGetDto>();
                }

                List<CourseGetDto>courseGetDtos=course.Select(courseGetDto=>new CourseGetDto{
                Id=courseGetDto.Id,
                Title=courseGetDto.Title,
                Description=courseGetDto.Description,
                IdCategoryName=courseGetDto.IdCategory,
                }).ToList();
                
                return courseGetDtos;
            }
            catch(Exception ex){
                Console.WriteLine($"Error al recuperar cursos: {ex.Message}");
                throw;
            }
        }

        public async Task<CourseGetWhereDto?> GetWhere(int courseId){
            var instructorRoleId = await _context.Roles
                .Where(r => r.Name == "instructor")
                .Select(r => r.Id)
                .FirstOrDefaultAsync();
            
            var course = await _context.Courses
                .Include(c=>c.Category)
                .Include(c=>c.UserCourses)
                .ThenInclude(cu=>cu.User)
                .Select(c => new CourseGetWhereDto
                {
                    
                    Id = c.Id,
                    Title = c.Title,
                    Description=c.Description,
                    CategoryName=c.Category.Name,
                    UserName=c.UserCourses
                    .Where(cu=>_context.UserRoles.Any(ur=>ur.UserId==cu.UserId && ur.RoleId==instructorRoleId))
                    .Select(cu => cu.User.FirstName + " " + cu.User.LastName)
                        .FirstOrDefault()?? ""
                })
                // Filtra por el id del curso
                .FirstOrDefaultAsync(c => c.Id == courseId);
            return course;
        }

        public async Task <Course> Create(CourseInputDto courseInputDto){
            if (courseInputDto.IdCategory <= 0)
            {
                throw new ArgumentException("El IdCategory debe ser un valor válido mayor que 0.");
            }
            
            var category = await _context.Categories.FindAsync(courseInputDto.IdCategory);
            if (category == null)
            {
                throw new Exception("La categoría especificada no existe.");
            }

            string courseNameLower = courseInputDto.Title.ToLower();

            var course = new Course{
                Title = courseNameLower,
                Description = courseInputDto.Description,
                IdCategory = courseInputDto.IdCategory,
                Prerequisites = courseInputDto.Prerequisites,
                BulletPoints = courseInputDto.BulletPoints,
                DurationHours = courseInputDto.DurationHours,
            };

            _context.Courses.Add(course);

            try{
                await _context.SaveChangesAsync();
            }
            catch(Exception ex){
                throw new Exception("an error ocurred while saven the course",ex);
            }
            return course;
        }

        public async Task <List<Course>>SearchCourses(CourseGetDto courseGetDto){
            
            var query = _context.Courses.AsQueryable();

            if(!string.IsNullOrWhiteSpace(courseGetDto.Title))
            {
                string courseNameLower = courseGetDto.Title.ToLower();
                query=query.Where(c=>c.Title.Contains(courseNameLower));
            }

            if(!string.IsNullOrWhiteSpace(courseGetDto.CategoryName))
            {
                string categoryNameLower = courseGetDto.CategoryName.ToLower();
               query=query.Include(c=> c.Category)
                          .Where(c=>c.Category.Name.Contains(categoryNameLower));
            }

            if (!string.IsNullOrWhiteSpace(courseGetDto.NameTags))
            {
               string nameTags= courseGetDto.NameTags.ToLower();
               query=query.Include(c=>c.CourseTags)
                          .ThenInclude(ct=>ct.Tags)
                          .Where(c => c.CourseTags.Any(ct => ct.Tags.Name.ToLower().Contains(nameTags)));
            }

            var result = await query.ToListAsync();

            return result;
        }  

        public async Task<UserCourse> Registration(CourseRegistrationDto courseRegistrationDto)
        {
            var user = await _context.Users.FindAsync(courseRegistrationDto.UserId);
            var course = await _context.Courses.FindAsync(courseRegistrationDto.CourseId);

            var userCourse = new UserCourse
            {
                UserId = user!.Id,
                CourseId = course!.Id,
                User = user!,
                Course = course
            };

            _context.UserCourses.Add(userCourse);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("hubo un error al inscribir curso", ex);
            }

            return userCourse;
        }
    }
}