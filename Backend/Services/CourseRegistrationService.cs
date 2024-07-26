using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Models;
using Backend.Dtos;

namespace Backend.Services
{
    public class CourseRegistrationService(ApplicationDbContext context)
    {
     private readonly ApplicationDbContext _context = context;
     
     public async Task <UserCourse>Create(CourseRegistrationDto courseRegistrationDto){
            var user = await _context.Users.FindAsync(courseRegistrationDto.UserId);
            var course= await _context.Courses.FindAsync(courseRegistrationDto.CourseId);

            var userCourse = new UserCourse{
            UserId=user!.Id,
            CourseId=course!.Id,
            User=user!,
            Course=course,
            };

            _context.UserCourses.Add(userCourse);

            try{
            await _context.SaveChangesAsync();
            }
            catch(Exception ex){
             throw new Exception("hubo un error al inscribir curso",ex);
            }
            return userCourse;
        }

    }
}