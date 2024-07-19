using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Models;
using Backend.Dtos;

namespace Backend.Services
{
    public class ResourceService
    {
           private readonly ApplicationDbContext _context;
           public ResourceService(ApplicationDbContext context){
               _context = context;
           }

           public async Task<Resource>Create(ResourceDto resourceDto){

            var resource= new Resource{
            Name=resourceDto.Name,
            Tipe=resourceDto.Tipe,
            Link=resourceDto.Link,
            };
            
            _context.Resources.Add(resource);

            try{
                await _context.SaveChangesAsync();
            }catch(Exception ex)
            {
              throw new Exception("hubo un error al crear el Recurso",ex);
            }

            return resource;
        }
    }
}