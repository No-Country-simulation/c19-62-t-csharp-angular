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
    public class CourseModuleController:ControllerBase
    {
          private readonly CourseModuleService _courseModule;
        private readonly ILogger<CourseModuleController> _logger;
          private readonly ApplicationDbContext _context; 
        public CourseModuleController(CourseModuleService courseModul,ILogger<CourseModuleController> logger,ApplicationDbContext context){
            _courseModule= courseModul;
            _logger= logger;
            _context= context;
        }

        [Route("CreateCourseModule")]
        [HttpPost]
         public async Task <IActionResult>CreateCourseModule(CourseModuleDto courseModuleDto){

            if (courseModuleDto==null){
                BadRequest("Los datos son requeridos");
            }

            if (courseModuleDto!.CourseId <= 0)
           {
            return BadRequest("el id curso debe ser mayor a 0");
           }

           if (courseModuleDto.ModuleId <= 0){
            return BadRequest("el id modulo debe ser mayor a 0");
           }

            var curse = await _context.Courses.FindAsync(courseModuleDto.CourseId);
            if (curse == null)
             {
               return BadRequest("el id curso no existe");
             }

             var module= await _context.Modules.FindAsync(courseModuleDto.ModuleId);
             if (module == null){
                return BadRequest("el id modulo no existe");
             }
            
            try{
            var response= await _courseModule.Create(courseModuleDto);

            if (response == null){
                return BadRequest("Hubo un error al crear el curso Modulo");

            }

         return Created( string.Empty ,new {
             Message = "Curso Modulo Registrado" ,
             CourseModule=response
             });
            } 
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear el Curso modulo.");   
            return StatusCode(500, "Ocurrió un error interno al crear el Curso modulo. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}