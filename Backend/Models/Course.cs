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
        [ForeignKey("User")]
        public string UserId { get; set; } = string.Empty;


        [Column(TypeName = "nvarchar(256)")]
        public string Title { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(256)")]
        public string Subtitle { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(max)")]
        public string Description { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(max)")]
        public string Prerequisites { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(max)")]
        public string BulletPoints { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(256)")]
        public string Level { get; set; } = string.Empty;
        [Column(TypeName = "smallint")]
        public short DurationHours { get; set; }
        public int CategoryId {get;set;} 
        public Category Category{ get; set; }=null!;
        
        [JsonIgnore]
        public ICollection<UserCourse> UserCourses { get; set; } = [];
        [JsonIgnore]
        public ICollection<CourseTags> CourseTags { get; set; } = [];
         [JsonIgnore]
        public ICollection<CourseModule> CourseModules { get; set; } = [];
    }
}