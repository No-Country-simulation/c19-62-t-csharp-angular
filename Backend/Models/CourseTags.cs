using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class CourseTags
    {
        [Key]

        public int Id { get; set; }

        public int IdCourse { get; set; }   

        public int IdTags { get; set; }

        public Course Course { get; set; }=new Course();
        public Tags Tags { get; set; } = new Tags();

        

    }
}