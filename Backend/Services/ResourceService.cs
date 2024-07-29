using Backend.Context;
using Backend.Models;
using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services
{
    public class ResourceService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<Resource> Create(ResourceCreateDto resourceDto)
        {
            var resource = new Resource
            {
                Name = resourceDto.Name,
                Type = resourceDto.Type,
                Link = resourceDto.Link,
            };

            _context.Resources.Add(resource);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("hubo un error al crear el Recurso", ex);
            }

            return resource;
        }

        public async Task<List<Resource>> GetAll()
        {
            return await _context.Resources.ToListAsync();
        }

        public async Task<Resource?> GetById(int id)
        {
            return await _context.Resources.FindAsync(id);
        }

        public async Task<Resource?> Update(ResourceDto resourceDto)
        {
            var resource = await _context.Resources.FindAsync(resourceDto.Id);
            if (resource == null || resourceDto.Name.IsNullOrEmpty() || resourceDto.Type.IsNullOrEmpty() || resourceDto.Link.IsNullOrEmpty())
                return resource;

            resource.Name = resourceDto.Name;
            resource.Type = resourceDto.Type;
            resource.Link = resourceDto.Link;
            _context.Update<Resource>(resource!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al actualizar el Recurso", ex);
            }

            return resource;
        }

        public async Task<Resource?> Delete(int id)
        {
            var resource = await _context.Resources.FindAsync(id);
            if (resource == null)
                return resource;

            _context.Remove<Resource>(resource!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al borrar el Recurso", ex);
            }

            return resource;
        }
    }
}