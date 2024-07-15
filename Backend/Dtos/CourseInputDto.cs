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

        public  int IdCategory {get; set; }
        public string Name { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public string CourseResources { get; set; } = String.Empty;

    
        
    }
}