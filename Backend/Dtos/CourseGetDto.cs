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
                public string UserId { get; set; } = string.Empty;
                public string Title { get; set; } = string.Empty;
                public string Subtitle { get; set; } = string.Empty;
                public string Description { get; set; } = string.Empty;
                public string Prerequisites { get; set; } = string.Empty;
                public string BulletPoints { get; set; } = string.Empty;
                public string Level { get; set; } = string.Empty;
                public short DurationHours { get; set; }


                public int CategoryId { get; set; }
                public string CategoryName { get; set; } = string.Empty;
                public int TagId { get; set; }
                public string TagName { get; set; } = string.Empty;
                public List<ModuleDto> ModuleDtos { get; set; } = new List<ModuleDto>();
                public List<TagsDto> TagsDtos { get; set; } = new List<TagsDto>();

        }
}