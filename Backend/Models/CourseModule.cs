using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class CourseModule
    {
        [Key]

        public int Id { get; set; }

        public int CourseId { get; set; }   

        public int ModuleId { get; set; }

        public Course Course { get; set; }=new Course();
        public Module Module { get; set; } = new Module();
    }
}