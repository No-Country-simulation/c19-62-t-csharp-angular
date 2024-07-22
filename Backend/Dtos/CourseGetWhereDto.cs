using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseGetWhereDto
    {
         public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string CategoryName {get; set; } = string.Empty;
        public string LevelCategory {get; set; } = string.Empty;    
        public string Description { get; set; } = string.Empty;
        public string NameRol { get; set; } = string.Empty;

        public string IdRol { get; set; } = string.Empty;
    }
}