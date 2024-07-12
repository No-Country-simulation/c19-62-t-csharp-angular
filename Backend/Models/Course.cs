using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Name { get; set; } = String.Empty;
        [Column(TypeName = "varchar(200)")]
        public string Description { get; set; } = String.Empty;
        [Column(TypeName = "varchar(200)")]
        public string CourseResources { get; set; } = String.Empty;
        public ICollection<CourseUser>CourseUsers { get; set; } = new List<CourseUser>();
    }
}