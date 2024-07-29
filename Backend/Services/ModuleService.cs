using Backend.Context;
using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services
{
    public class ModuleService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<Module> Create(ModuleCreateDto moduleDto)
        {
            var module = new Module
            {
                Number = moduleDto.Number,
                Name = moduleDto.Name,
            };

            _context.Modules.Add(module);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al crear el Modulo", ex);
            }

            return module;
        }

        public async Task<List<Module>> GetAll()
        {
            return await _context.Modules.ToListAsync();
        }

        public async Task<Module?> GetById(int id)
        {
            return await _context.Modules.FindAsync(id);
        }

        public async Task<Module?> Update(ModuleDto moduleDto)
        {
            var module = await _context.Modules.FindAsync(moduleDto.Id);
            if (module == null || module.Number == 0 || module.Name.IsNullOrEmpty())
                return module;

            module.Number = moduleDto.Number;
            module.Name = moduleDto.Name;
            _context.Update<Module>(module!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al actualizar el Modulo", ex);
            }

            return module;
        }

        public async Task<Module?> Delete(int id)
        {
            var module = await _context.Modules.FindAsync(id);
            if (module == null)
                return module;

            _context.Remove<Module>(module!);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Hubo un error al borrar el Modulo", ex);
            }

            return module;
        }
    }
}