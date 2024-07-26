using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class CourseRegistrationDto
    {
        public string UserId { get; set; } =string.Empty;
        public int CourseId { get; set; }

    }
}