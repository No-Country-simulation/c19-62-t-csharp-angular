using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseGetDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string CategoryName { get; set; } = string.Empty;
        public int IdCategoryName { get; set; }
        public string LevelCategory { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string NameTags { get; set; } = string.Empty;
    }
}