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

         public int IdCategory {get;set;} 

        [JsonIgnore]
        
        public Category Category { get; set; }
        
        [JsonIgnore]
        public ICollection<CourseUser>CourseUsers { get; set; } = new List<CourseUser>();
    
        

    }
}