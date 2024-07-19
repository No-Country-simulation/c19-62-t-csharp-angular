using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class CourseTagsService
    {
          private readonly ApplicationDbContext _context; 
        public CourseTagsService(ApplicationDbContext context){
            _context = context;
        }

        public async Task <CourseTags>Create(CourseTagsDto courseTagsDto){
             var curse = await _context.Courses.FindAsync(courseTagsDto.IdCourse);
             var tags= await _context.Tags.FindAsync(courseTagsDto.IdTags);

            var courseTags = new CourseTags{
              IdCourse=curse!.Id,
              IdTags=tags!.Id,
              Course=curse,
              Tags=tags
            };

            _context.CourseTags.Add(courseTags);

            try{
            await _context.SaveChangesAsync();
            }
            catch(Exception ex){
                var innerExceptionMessage = ex.InnerException?.Message ?? ex.Message;
                throw new Exception($"An error occurred while saving the courseTags: {innerExceptionMessage}", ex);            }
            return courseTags;
        }
    }
}