using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class CourseUser
    {
        [Key]
        public int Id { get; set;}
        public int CourseId { get; set;}
        public string UserId { get; set;} = String.Empty;
        public Course Course { get; set;} = new Course();
        public User User { get; set;} = new User();
    }
}