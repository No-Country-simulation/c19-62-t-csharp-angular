using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class ModuleResourceListDto
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<ResourceDto> ResourceDtos { get; set; } = new List<ResourceDto>();
    }
}