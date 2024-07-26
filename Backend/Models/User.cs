
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class User : IdentityUser
    {
        [Column(TypeName = "nvarchar(256)")]
        public string FirstName { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(256)")]
        public string LastName { get; set; } = string.Empty;
        [JsonIgnore]
        public ICollection<UserCourse> UserCourses { get; set; } = [];
        
    }
}