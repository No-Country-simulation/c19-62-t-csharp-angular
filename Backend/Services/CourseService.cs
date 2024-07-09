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
        private readonly AppDbContext _context;

        public CourseService(AppDbContext context){
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
            CourseResources=courseGetDto.CourseResources
            }).ToList();
            
            return courseGetDtos;
            }
            catch(Exception ex){
            Console.WriteLine($"Error al recuperar cursos: {ex.Message}");
                throw;
            }
        }
               
    }
}