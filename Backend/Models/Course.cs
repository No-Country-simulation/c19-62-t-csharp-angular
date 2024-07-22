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
        [Column(TypeName = "nvarchar(256)")]
        public string Title { get; set; } = String.Empty;
        [Column(TypeName = "nvarchar(max)")]
        public string Description { get; set; } = String.Empty;
       [Column(TypeName = "nvarchar(max)")]
        public string Prerequisites { get; set; } = String.Empty;
       [Column(TypeName = "nvarchar(max)")]
        public string BulletPoints { get; set; } = String.Empty;
        [Column(TypeName = "smallint")]
        public short DurationDays { get; set; }

        [Column(TypeName = "smallint")]
        public short DurationHours { get; set; }

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