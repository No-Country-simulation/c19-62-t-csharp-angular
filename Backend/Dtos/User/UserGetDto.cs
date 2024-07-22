namespace Backend.Dtos
{
    public class UserGetDto
    {
        public string Id { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string FirstName { get; set; } = String.Empty;
        public string LastName { get; set; } = String.Empty;
        public string PhoneNumber { get; set; } = String.Empty;
        
        public List<CourseUserDto> CourseUsers { get; set; } = new List<CourseUserDto>();
    }
}