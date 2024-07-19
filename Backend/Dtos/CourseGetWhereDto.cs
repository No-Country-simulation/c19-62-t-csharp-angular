using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseGetWhereDto
    {
         public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string UserName { get; set; } =String.Empty;
        public string CategoryName {get; set; } = String.Empty;
        public string LevelCategory {get; set; } = String.Empty;    
        public string Description { get; set; } = String.Empty;
        public string CourseResources { get; set; } = String.Empty;
        public string NameRol { get; set; } = String.Empty;

        public string IdRol { get; set; }=String.Empty;
    }
}