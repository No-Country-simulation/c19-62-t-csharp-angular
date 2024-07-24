using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class CourseTagService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<CourseTag> Create(CourseTagsDto courseTagsDto)
        {
            var curse = await _context.Courses.FindAsync(courseTagsDto.CourseId);
            var tags = await _context.Tags.FindAsync(courseTagsDto.TagId);

            var courseTags = new CourseTag
            {
                CourseId = curse!.Id,
                TagId = tags!.Id,
                Course = curse,
                Tags = tags
            };

            _context.CourseTags.Add(courseTags);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var innerExceptionMessage = ex.InnerException?.Message ?? ex.Message;
                throw new Exception($"An error occurred while saving the courseTags: {innerExceptionMessage}", ex);
            }
            return courseTags;
        }
    }
}