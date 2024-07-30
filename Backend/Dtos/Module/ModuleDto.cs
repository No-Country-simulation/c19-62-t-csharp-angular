using Backend.Dtos.Resource;

namespace Backend.Dtos.Module
{
        public class ModuleDto
        {
                public int Id { get; set; }
                public short Number { get; set; }
                public string Name { get; set; } = string.Empty;
                public List<ResourceDto> ResourceDtos { get; set; } = [];
        }
}