using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.Linq;
using System.Threading.Tasks;
using Backend.models;

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

        public string Prerequisites { get; set; } = String.Empty;

        public string BulletPoints { get; set; } = String.Empty;

        public DateTime CursoDuration { get; set; }

         public int IdCategory {get;set;} 
        public Category Category { get; set; }
        
        [JsonIgnore]
        public ICollection<CourseUser>CourseUsers { get; set; } = new List<CourseUser>();

        [JsonIgnore]
        public ICollection<CourseTags> CourseTags { get; set;}= new List<CourseTags>();
     
         [JsonIgnore]
        public ICollection<CourseModule> CourseModules { get; set;}= new List<CourseModule>();
        

    }
}