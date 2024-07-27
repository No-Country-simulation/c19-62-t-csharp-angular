namespace Backend.Dtos
{
    public class CourseGetWhereDto
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Subtitle { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Prerequisites { get; set; } = string.Empty;
        public string BulletPoints { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty;
        public short DurationHours { get; set; }


        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;


        public string UserName { get; internal set; } = string.Empty;
        public string RoleId { get; set; } = string.Empty;
        public string RoleName { get; set; } = string.Empty;
    }
}