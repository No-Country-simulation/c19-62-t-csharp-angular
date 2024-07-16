using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend.Models
{
    public class User : IdentityUser
    {
        [Column(TypeName = "varchar(256)")]
        public string FirstName { get; set;} = String.Empty;
        [Column(TypeName = "varchar(256)")]
        public string LastName { get; set;} = String.Empty;
        public ICollection<CourseUser> CourseUsers { get; set; } = new List<CourseUser>();
    }
}