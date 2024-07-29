using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
namespace Backend.Dtos
{
    public class CourseGetDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Subtitle { get; set; } = string.Empty;
        public string LevelCategory { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string NameTags { get; set; } = string.Empty;
        public string BulletPoints { get; set; } = string.Empty;
        public short DurationHours { get; set; }
        public string Prerequisites { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public List<ModuleDto> ModuleDtos { get; set; } = new List<ModuleDto>();
        public List<TagsDto> TagsDtos { get; set; } = new List<TagsDto>();
        
    }
}