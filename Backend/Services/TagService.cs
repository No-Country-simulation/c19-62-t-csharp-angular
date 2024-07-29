using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class TagsService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<List<Tag>> GetAll()
        {
            return await _context.Tags.ToListAsync();
        }

        public async Task<Tag?> GetById(int id)
        {
            var result = await _context.Tags.FindAsync(id);
            return result;
        }

        public async Task<Tag> Create(TagCreateDto tagsDto)
        {
            var tags = new Tag
            {
                Name = tagsDto.Name,
            };

            _context.Tags.Add(tags);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("hubo un error al crear el tags", ex);
            }

            return tags;
        }

        public async Task<Tag?> Update(TagUpdateDto tagDto)
        {
            var tag = await _context.Tags.FindAsync(tagDto.Id);
            if (tag == null)
                return tag;

            tag.Name = tagDto.Name;
            _context.Update<Tag>(tag!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al actualizar el tag", ex);
            }

            return tag;
        }

        public async Task<Tag?> Delete(int id)
        {
            var tag = await _context.Tags.FindAsync(id);
            if (tag == null)
                return tag;

            _context.Remove<Tag>(tag!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al actualizar el tag", ex);
            }

            return tag;
        }
    }
}