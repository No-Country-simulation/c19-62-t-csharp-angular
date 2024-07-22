using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Tags
    {
        [Key]
        public int Id { get; set; }


        [Column(TypeName = "varchar(256)")]
        public string Name { get; set; } = string.Empty;
        
        
        [JsonIgnore]
        public ICollection<CourseTags> CourseTags { get; set; } = [];
    }
}