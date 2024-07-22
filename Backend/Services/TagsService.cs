using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class TagsService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<Tags>Create(TagsDto tagsDto){
            var tags= new Tags{
                Name=tagsDto.Name,
            };
            
            _context.Tags.Add(tags);

            try{
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw new Exception("hubo un error al crear el tags",ex);
            }

            return tags;
        }
    }
}