using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class CourseModule
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "int")]
        public int CourseId { get; set; }
        [Column(TypeName = "int")]
        public int ModuleId { get; set; }

        public Course Course { get; set; } = new Course();
        public Module Module { get; set; } = new Module();
    }
}