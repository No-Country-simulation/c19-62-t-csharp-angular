namespace Backend.Dtos
{
    public class UserGetDto
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;

        public List<UserCourseDto> UserCourses { get; set; } = [];
    }
}