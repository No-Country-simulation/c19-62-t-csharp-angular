using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Name { get; set; }
        
        [Column(TypeName = "varchar(200)")]
        public string Description { get; set; }

        [Column(TypeName = "varchar(200)")]
        public string CourseResources { get; set; }

        public ICollection<CourseUser>CourseUsers { get; set; }
    }
}