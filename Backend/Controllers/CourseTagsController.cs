using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Backend.Context;

namespace Backend.Controllers
{
     [Route("api/[controller]")]
     [ApiController]
    public class CourseTagsController:ControllerBase
    {
         private readonly CourseTagsService _courseTagsService;
        private readonly ILogger<CourseTagsController> _logger;

        private readonly ApplicationDbContext _context; 

        public CourseTagsController(CourseTagsService courseTagsService,ILogger<CourseTagsController> logger,ApplicationDbContext context){
            _courseTagsService= courseTagsService;
            _logger= logger;
            _context= context;
        }

        [Route("CreateCourseTags")]
        [HttpPost]
         public async Task <IActionResult>CreateCourseTags(CourseTagsDto courseTagsDto){

            if (courseTagsDto==null){
                BadRequest("Los datos son requeridos");
            }

            if (courseTagsDto!.CourseId <= 0)
           {
           return BadRequest("El id curso debe ser mayor a 0");
           }

           if (courseTagsDto.IdTags <= 0){
            return BadRequest("El id tag debe ser mayor a 0");
           }

            var curse = await _context.Courses.FindAsync(courseTagsDto.CourseId);
            if (curse == null)
             {
             return BadRequest("El id curso no existe");
             }

             var tags= await _context.Tags.FindAsync(courseTagsDto.IdTags);
             if (tags == null){
                return BadRequest("El id modulo no existe");
             }
            
            try{
            var response= await _courseTagsService.Create(courseTagsDto);

            if (response == null){
                return BadRequest("Hubo un error al crear el curso Tags");

            }

         return Created( string.Empty ,new {
             Message = "Curso Tags Registrado" ,
             CourseTags=response
             });
            } 
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear el Curso Tags.");   
            return StatusCode(500, "Ocurrió un error interno al crear el Curso tags. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}