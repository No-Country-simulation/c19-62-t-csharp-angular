using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
namespace Backend.Dtos
{
    public class CourseUserDto
    {
        public int Id { get; set;}
        public int CourseId { get; set;}
        public string UserId { get; set;} = String.Empty;
        public Course Course { get; set;} = new Course();
        public User User { get; set;} = new User();
    }
}