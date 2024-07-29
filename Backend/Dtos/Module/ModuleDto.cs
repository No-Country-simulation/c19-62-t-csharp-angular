namespace Backend.Dtos
{
        public class ModuleDto
        {
                public int Id { get; set; }
                public string Name { get; set; } = string.Empty;
                public List<ResourceDto> ResourceDtos { get; set; } = new List<ResourceDto>();
        }
}