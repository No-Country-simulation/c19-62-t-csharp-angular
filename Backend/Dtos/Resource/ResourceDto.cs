using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
        public class ResourceDto
        {
                public int Id { get; set; }
                public string Name { get; set; } = string.Empty;
                public string Type { get; set; } = string.Empty;
                public string Link { get; set; } = string.Empty;
        }
}