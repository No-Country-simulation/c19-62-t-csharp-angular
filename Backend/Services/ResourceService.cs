using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Models;
using Backend.Dtos;

namespace Backend.Services
{
    public class ResourceService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<Resource>Create(ResourceDto resourceDto){
            var resource= new Resource{
                Name=resourceDto.Name,
                Type=resourceDto.Type,
                Link=resourceDto.Link,
            };
            
            _context.Resources.Add(resource);

            try{
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw new Exception("hubo un error al crear el Recurso",ex);
            }

            return resource;
        }
    }
}