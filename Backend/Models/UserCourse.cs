using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class UserCourse
    {
        [Key]
        public int Id { get; set;}

        
        [Column(TypeName = "nvarchar(450)")]
        public string UserId { get; set; } = string.Empty;
        [Column(TypeName = "int")]
        public int CourseId { get; set; }

        
        public User User { get; set; } = new User();
        public Course Course { get; set; } = new Course();
    }
}