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


        public string NameRol { get; set; } = string.Empty;
        public string IdRol { get; set; } = string.Empty;
    }
}