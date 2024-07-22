using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Module
    {
        [Key]
        public int Id { get; set; }


        [Column(TypeName = "smallint")]
        public int Number { get; set; }
        [Column(TypeName = "nvarchar(256)")]
        public string Name { get; set; } = string.Empty;


        [JsonIgnore]
        public ICollection<CourseModule> CourseModules { get; set; } = [];
        [JsonIgnore]
        public ICollection<ModuleResource> ModuleResources { get; set; } = [];

    }
}