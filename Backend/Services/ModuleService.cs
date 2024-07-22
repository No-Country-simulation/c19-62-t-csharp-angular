using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using BackendModule = Backend.Models.Module;
namespace Backend.Services
{
    public class ModuleService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<BackendModule>Create(ModuleDto moduleDto){
            var module= new BackendModule{
                Name=moduleDto.Name,
            };
            
            _context.Modules.Add(module);

            try{
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw new Exception("hubo un error al crear el modulo",ex);
            }

            return module;
        }
    }
}