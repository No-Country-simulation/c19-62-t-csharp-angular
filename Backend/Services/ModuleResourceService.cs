using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class ModuleResourceService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task <ModuleResource>Create(ModuleResourceDto moduleResourceDto){ 
            var module = await _context.Modules.FindAsync(moduleResourceDto.ModuleId);
            var resource = await _context.Resources.FindAsync(moduleResourceDto.ResourceId);

            var resourceModule = new ModuleResource{
                ModuleId=module!.Id,
                ResourceId=resource!.Id,
                Module=module,
                Resource=resource,
            };

            _context.ModuleResources.Add(resourceModule);

            try{
                await _context.SaveChangesAsync();
            }
            catch(Exception ex){
                throw new Exception("an error ocurred while saven the ModuleResourec",ex);
            }
            
            return resourceModule;
        }
    }
}