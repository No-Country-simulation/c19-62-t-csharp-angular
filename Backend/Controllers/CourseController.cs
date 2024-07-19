using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Backend.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class CourseController:ControllerBase
    {
        private readonly CourseService _courseService;
        private readonly ILogger<CourseController> _logger;

        public CourseController(CourseService courseService,ILogger<CourseController> logger){
            _courseService = courseService;
            _logger = logger;   
        }

        [Route("GetAll")]
        [HttpGet]
        public async Task <IActionResult>GetAll(){

            try{
            List<CourseGetDto> courseResponse=await _courseService.GetAll();
            if (courseResponse.Count==0){
                return NotFound("No courses found");
            }

            return Ok(courseResponse);
            }
            catch(Exception ex){
                Console.WriteLine($"Error retrieving courses: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        [Route("GetWhere")]
        [HttpGet]
        public async Task<IActionResult>GetWhere(int courseId){
            var course= await _courseService.GetWhere(courseId);
            if (course==null){
                return NotFound();
            }

            return Ok(course);
        }

        [Route("CreateCourse")]
        [HttpPost]

        public async Task <IActionResult>CreateCourse(CourseInputDto courseInputDto){

            if (courseInputDto==null){
                BadRequest("Los datos del cursos son requeridos");
            }
            
            try{
            var response= await _courseService.Create(courseInputDto!);

            if (response == null){
                return BadRequest("Hubo un error al crear el curso");

            }

         return Created( string.Empty ,new {
             Message = "Curso Registrado" ,
             Course=response
             });
            } 
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear el curso.");   
            return StatusCode(500, "Ocurrió un error interno al crear el curso. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("search")]
        [HttpGet]
    public async Task<IActionResult> SearchCourses([FromQuery] CourseGetDto courseGetDto)
{
    if (string.IsNullOrWhiteSpace(courseGetDto.Name) &&
    string.IsNullOrWhiteSpace(courseGetDto.CategoryName) &&
    string.IsNullOrWhiteSpace(courseGetDto.NameTags)&&
    string.IsNullOrWhiteSpace(courseGetDto.LevelCategory))
    {
    return BadRequest("Al menos uno de los criterios de búsqueda debe ser proporcionado.");
    }

    try
    {
        var courses = await _courseService.SearchCourses(courseGetDto);

        if (courses == null || courses.Count==0)
        {
            return NotFound("No se encontraron cursos que coincidan con los criterios de búsqueda.");
        }

        return Ok(courses);
    }
    catch (Exception ex)
    {
        // Manejo de excepciones general
        return StatusCode(500, $"Se produjo un error en el servidor: {ex.Message}");
    }
}

        
    }
}