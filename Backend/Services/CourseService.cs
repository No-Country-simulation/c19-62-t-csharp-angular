using Backend.Context;
using Backend.Dtos;
using Backend.Dtos.Module;
using Backend.Dtos.Resource;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class CourseService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<List<CourseGetDto>> GetAll()
        {
            try
            {
                var courses = await _context.Courses
                    .Include(c => c.CourseTags)
                         .ThenInclude(ct => ct.Tags)
                    .Include(c => c.CourseModules)
                         .ThenInclude(cm => cm.Module)
                              .ThenInclude(m => m.ModuleResources)
                                   .ThenInclude(mr => mr.Resource)
                    .ToListAsync();

                if (courses.Count == 0)
                {
                    return [];
                }

                List<CourseGetDto> courseGetDtos = courses.Select(courseGetDto => new CourseGetDto
                {
                    Id = courseGetDto.Id,
                    Title = courseGetDto.Title,
                    Subtitle = courseGetDto.Subtitle,
                    Description = courseGetDto.Description,
                    CategoryId = courseGetDto.IdCategory,
                    BulletPoints = courseGetDto.BulletPoints,
                    DurationHours = courseGetDto.DurationHours,
                    Prerequisites = courseGetDto.Prerequisites,
                    TagsDtos = courseGetDto.CourseTags.Select(tagsDto => new TagDto
                    {
                        Id = tagsDto.Tags.Id,
                        Name = tagsDto.Tags.Name,
                    }).ToList(),
                    ModuleDtos = courseGetDto.CourseModules.Select(moduleGetDto => new ModuleDto
                    {
                        Id = moduleGetDto.Id,
                        Number = moduleGetDto.Module.Number,
                        Name = moduleGetDto.Module.Name,
                        ResourceDtos = moduleGetDto.Module.ModuleResources.Select(resourceDto => new ResourceDto
                        {
                            Id = resourceDto.Id,
                            Name = resourceDto.Resource.Name,
                            Type = resourceDto.Resource.Type,
                            Link = resourceDto.Resource.Link,
                        }).ToList()
                    }).ToList()
                }).ToList();

                return courseGetDtos;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error al recuperar cursos: {ex.Message}");
                throw;
            }
        }

        public async Task<CourseGetDto?> GetById(int courseId)
        {
            try
            {

                var course = await _context.Courses
                     .Include(c => c.CourseTags)
                         .ThenInclude(ct => ct.Tags)
                     .Include(c => c.CourseModules)
                          .ThenInclude(cm => cm.Module)
                                .ThenInclude(m => m.ModuleResources)
                                      .ThenInclude(mr => mr.Resource)
                     .FirstOrDefaultAsync(c => c.Id == courseId);

                if (course == null)
                {
                    return null;
                }

                return new CourseGetDto
                {
                    Id = course.Id,
                    Title = course.Title,
                    Subtitle = course.Subtitle,
                    Description = course.Description,
                    CategoryId = course.IdCategory,
                    BulletPoints = course.BulletPoints,
                    DurationHours = course.DurationHours,
                    Prerequisites = course.Prerequisites,
                    TagsDtos = course.CourseTags.Select(tagsDto => new TagDto
                    {
                        Id = tagsDto.Tags.Id,
                        Name = tagsDto.Tags.Name,
                    }).ToList(),
                    ModuleDtos = course.CourseModules.Select(moduleGetDto => new ModuleDto
                    {
                        Number = moduleGetDto.Module.Number,
                        Name = moduleGetDto.Module.Name,
                        ResourceDtos = moduleGetDto.Module.ModuleResources.Select(resourceDto => new ResourceDto
                        {
                            Name = resourceDto.Resource.Name,
                            Type = resourceDto.Resource.Type,
                            Link = resourceDto.Resource.Link,
                        }).ToList()
                    }).ToList()
                };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error al recuperar cursos: {ex.Message}");
                throw;
            }
        }

        public async Task<CourseGetWhereDto?> GetWhere(int courseId)
        {
            var instructorRoleId = await _context.Roles
                .Where(r => r.Name == "instructor")
                .Select(r => r.Id)
                .FirstOrDefaultAsync();

            var course = await _context.Courses
                .Include(c => c.Category)
                .Include(c => c.UserCourses)
                .ThenInclude(cu => cu.User)
                .Select(c => new CourseGetWhereDto
                {
                    Id = c.Id,
                    Title = c.Title,
                    Description = c.Description,
                    CategoryName = c.Category.Name,
                    UserName = c.UserCourses
                    .Where(cu => _context.UserRoles.Any(ur => ur.UserId == cu.UserId && ur.RoleId == instructorRoleId))
                    .Select(cu => cu.User.FirstName + " " + cu.User.LastName)
                        .FirstOrDefault() ?? ""
                })
                // Filtra por el id del curso
                .FirstOrDefaultAsync(c => c.Id == courseId);
            return course;
        }

        public async Task<Course> Create(CourseInputDto courseInputDto)
        {
            if (courseInputDto.CategoryId <= 0)
            {
                throw new ArgumentException("El CategoryId debe ser un valor válido mayor que 0.");
            }

            var category = await _context.Categories.FindAsync(courseInputDto.CategoryId);
            if (category == null)
            {
                throw new Exception("La categoría especificada no existe.");
            }

            string courseTitleLower = courseInputDto.Title.ToLower();
            string courseSubtitleLower = courseInputDto.Subtitle.ToLower();

            var course = new Course
            {
                Title = courseTitleLower,
                Subtitle = courseSubtitleLower,
                Description = courseInputDto.Description,
                Prerequisites = courseInputDto.Prerequisites,
                BulletPoints = courseInputDto.BulletPoints,
                CategoryId = courseInputDto.CategoryId,
                Level = courseInputDto.Level,
                DurationHours = courseInputDto.DurationHours,
            };

            _context.Courses.Add(course);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("an error ocurred while saven the course", ex);
            }
            return course;
        }

        public async Task<List<Course>> SearchCourses(CourseGetDto courseGetDto)
        {

            var query = _context.Courses.AsQueryable();

            if (!string.IsNullOrWhiteSpace(courseGetDto.Title))
            {
                string courseNameLower = courseGetDto.Title.ToLower();
                query = query.Where(c => c.Title.Contains(courseNameLower));
            }

            if (!string.IsNullOrWhiteSpace(courseGetDto.CategoryName))
            {
                string categoryNameLower = courseGetDto.CategoryName.ToLower();
                query = query.Include(c => c.Category)
                           .Where(c => c.Category.Name.Contains(categoryNameLower));
            }

            if (!string.IsNullOrWhiteSpace(courseGetDto.TagName))
            {
                string tagNames = courseGetDto.TagName.ToLower();
                query = query.Include(c => c.CourseTags)
                           .ThenInclude(ct => ct.Tags)
                           .Where(c => c.CourseTags.Any(ct => ct.Tags.Name.ToLower().Contains(tagNames)));
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