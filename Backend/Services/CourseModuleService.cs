using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class CourseModuleService
    {
        private readonly ApplicationDbContext _context; 
        public CourseModuleService(ApplicationDbContext context){
            _context = context;
        }
     
     public async Task <CourseModule>Create(CourseModuleDto courseModuleDto){
            var curse = await _context.Courses.FindAsync(courseModuleDto.CourseId);
            var module= await _context.Modules.FindAsync(courseModuleDto.ModuleId);

            var courseModule = new CourseModule{
            CourseId=curse!.Id,
            ModuleId=module!.Id,
            Course=curse,
            Module=module,
            };

            _context.CourseModule.Add(courseModule);

            try{
            await _context.SaveChangesAsync();
            }
            catch(Exception ex){
             throw new Exception("an error ocurred while saven the courseModule",ex);
            }
            return courseModule;
        }

    }
}