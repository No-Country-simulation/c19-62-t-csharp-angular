using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.models;

namespace Backend.Services
{
    public class CategoryService
    {
        private readonly ApplicationDbContext _context; 
        public CategoryService(ApplicationDbContext context){
            _context = context;
        }

        public async Task <Category>Create(CategoryDto categoryDto){
            string categoryNameLower = categoryDto.Name.ToLower();

            var category = new Category{
            Name = categoryNameLower,
            Level = categoryDto.Level,
        
            };

            _context.Categories.Add(category);

            try{
            await _context.SaveChangesAsync();
            }
            catch(Exception ex){
             throw new Exception("hubo un error al crear la categoria",ex);
            }
            return category;
        }
        
    }
}