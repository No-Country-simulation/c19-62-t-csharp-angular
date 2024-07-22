using Backend.Context;
using Backend.Dtos;
using Backend.models;

namespace Backend.Services
{
    public class CategoryService(ApplicationDbContext context)
    {
        private readonly ApplicationDbContext _context = context;

        public async Task <Category>Create(CategoryDto categoryDto){
            string categoryNameLower = categoryDto.Name.ToLower();

            var category = new Category{
            Name = categoryNameLower
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