using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseModuleDto
    {
        public int Id { get; set; }

        public int CourseId { get; set; }   

        public int ModuleId { get; set; }
    }
}