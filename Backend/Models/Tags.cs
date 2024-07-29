using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Tag
    {
        [Key]
        public int Id { get; set; }


        [Column(TypeName = "nvarchar(256)")]
        public string Name { get; set; } = string.Empty;


        [JsonIgnore]
        public ICollection<CourseTag> CourseTags { get; set; } = [];
    }
}