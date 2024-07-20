using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.models;
using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class CourseInputDto
    {
         
        [Required] 
        public  int IdCategory {get; set; }

        [Required] 
        public string Title { get; set; } = String.Empty;
        [Required]
        public string Description { get; set; } = String.Empty;
        [Required]
       
        public string Prerequisites { get; set; } = String.Empty;
        [Required]

        public string BulletPoints { get; set; } = String.Empty;
        [Required]

        public short DurationDays { get; set; }

        [Required]
        public short DurationHours { get; set; }
    
        
    }
}