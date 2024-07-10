using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class UserGetDto
    {
        public string Id { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public string UserName { get; set; } = String.Empty;
        public string Name { get; set; } = String.Empty;
        public List<CourseUserDto> CourseUsers { get; set; } = new List<CourseUserDto>();
    }
}