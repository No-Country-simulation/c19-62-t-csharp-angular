using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class CourseService
    {
        private readonly ApplicationDbContext _context; 
        public CourseService(ApplicationDbContext context){
            _context = context;
        }

        public async Task<List<CourseGetDto>>GetAll(){

            try{

            List<Course>course=await  _context.Courses.ToListAsync();

            if(course.Count==0){
                return new List<CourseGetDto>();
            }

            List<CourseGetDto>courseGetDtos=course.Select(courseGetDto=>new CourseGetDto{
            Id=courseGetDto.Id,
            Name=courseGetDto.Name,
            Description=courseGetDto.Description,
            CourseResources=courseGetDto.CourseResources,
            IdCategoryName=courseGetDto.IdCategory,
            }).ToList();
            
            return courseGetDtos;
            }
            catch(Exception ex){
            Console.WriteLine($"Error al recuperar cursos: {ex.Message}");
                throw;
            }
        }

        public async Task <Course>Create(CourseInputDto courseInputDto){
           if (courseInputDto.IdCategory <= 0)
           {
            throw new ArgumentException("El IdCategory debe ser un valor válido mayor que 0.");
          }
            
            var category = await _context.Categories.FindAsync(courseInputDto.IdCategory);
            if (category == null)
             {
             throw new Exception("La categoría especificada no existe.");
             }

            string courseNameLower = courseInputDto.Name.ToLower();

            var course = new Course{
            Name = courseNameLower,
            Description = courseInputDto.Description,
            CourseResources = courseInputDto.CourseResources,
           IdCategory=courseInputDto.IdCategory,
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
            
            var query=  _context.Courses.AsQueryable();

            if(!string.IsNullOrWhiteSpace(courseGetDto.Name))
            {
                string courseNameLower = courseGetDto.Name.ToLower();
                query=query.Where(c=>c.Name.Contains(courseNameLower));
            }

            if(!string.IsNullOrWhiteSpace(courseGetDto.CategoryName))
            {
                string categoryNameLower = courseGetDto.CategoryName.ToLower();
               query=query.Include(c=> c.Category)
                          .Where(c=>c.Category.Name.Contains(categoryNameLower));
            }

            if(!string.IsNullOrWhiteSpace(courseGetDto.LevelCategory))
            {
                string levelCategoryLower = courseGetDto.LevelCategory.ToLower();
               query=query.Include(c=> c.Category)
                          .Where(c=>c.Category.Level.Contains(levelCategoryLower));
            }

            var result=await query.ToListAsync();

            return result;
        }
               
    }
}