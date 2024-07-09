using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Linq;
using System.Threading.Tasks;

namespace Backend.models
{
    public class User
    {
        [Key]
        public int Id { get; set;}
        [Column(TypeName = "varchar(80)")]
        public string? UserName {get;set;}

         [Column(TypeName = "varchar(80)")]
        public string Name { get; set;}

         [Column(TypeName = "varchar(80)")]
        public string Email { get; set; }

         [Column(TypeName = "varchar(80)")]
        public string Password { get; set; }
        
        public ICollection<CourseUser>CourseUsers { get; set; }
        
    }
}