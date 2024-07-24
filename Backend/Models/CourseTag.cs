using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class CourseTag
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "int")]
        public int CourseId { get; set; }
        [Column(TypeName = "int")]
        public int TagId { get; set; }

        public Course Course { get; set; } = new Course();
        public Tag Tags { get; set; } = new Tag();
    }
}