using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class ModuleResourceService
    {
         private readonly ApplicationDbContext _context; 
        public ModuleResourceService(ApplicationDbContext context){
            _context = context;
        }

        public async Task <ResourceModule>Create(ModuleResourceDto moduleResourceDto){ 
             var module = await _context.Modules.FindAsync(moduleResourceDto.ModuleId);
             var resource= await _context.Resources.FindAsync(moduleResourceDto.ResourceId);

            var resourceModule = new ResourceModule{
            ModuleId=module!.Id,
            ResourceId=resource!.Id,
            Module=module,
            Resource=resource,
            };

            _context.ResourceModules.Add(resourceModule);

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