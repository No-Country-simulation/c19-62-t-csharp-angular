using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseGetDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = String.Empty;
        public string CategoryName {get; set; } = String.Empty;
        public int IdCategoryName {get; set; }
        public string LevelCategory {get; set; } = String.Empty;    
        public string Description { get; set; } = String.Empty;
        public string NameTags { get; set; } = String.Empty;
    }
}