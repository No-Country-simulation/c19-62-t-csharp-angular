using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class UserUpdateDto
    {
        public string Email { get; set; } = String.Empty;
        public string CurrentPassword { get; set; } = String.Empty;
        public string NewPassword { get; set; } = String.Empty;
        public string FirstName { get; set; } = String.Empty;
        public string LastName { get; set; } = String.Empty;
        public string PhoneNumber { get; set; } = String.Empty;
    }
}