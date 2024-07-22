using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
namespace Backend.Dtos
{
    public class UserCourseDto
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public string UserId { get; set; } = string.Empty;
        public Course Course { get; set; } = new Course();
        public User User { get; set; } = new User();
    }
}