using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController(CategoryService categoryService, ILogger<CategoryController> logger) : ControllerBase
    {
        private readonly CategoryService _categoryService = categoryService;
        private readonly ILogger<CategoryController> _logger = logger;

        [Route("CreateCategory")]
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CategoryDto categoryDto){
            if (categoryDto==null)
                BadRequest("Los datos del cursos son requeridos");
            
            try{
                var response= await _categoryService.Create(categoryDto!);

                if (response == null){
                    return BadRequest("Hubo un error al crear la categoria");
                }

                return Created( string.Empty ,new {
                    Message = "Categoria Registrada",
                    Category=response
                });
            }
            
            catch(Exception ex){
                // Log the exception details
                _logger.LogError(ex, "Error al crear la categoria.");   
                return StatusCode(500, "Ocurrió un error interno al crear la categoria. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}