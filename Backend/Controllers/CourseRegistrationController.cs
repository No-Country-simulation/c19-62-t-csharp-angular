using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Net.Http.Headers;
using Backend.Models;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using Newtonsoft.Json;
using System.ComponentModel;
using Backend.Context;
using System.Configuration;
using Backend.Services;
using Backend.Dtos;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseRegistrationController(CourseRegistrationService courseRegistrationService,ILogger<CategoryController> logger,ApplicationDbContext context):ControllerBase
    {
         private readonly CourseRegistrationService _courseRegistrationService = courseRegistrationService;
         private readonly ILogger<CategoryController> _logger = logger;
         private readonly ApplicationDbContext _context = context;

        [Route("CreateCourseRegistration")]
        [HttpPost]
        public async Task<IActionResult> CreateCourseRegistratio(CourseRegistrationDto courseRegistrationDto)
        { 
                if (courseRegistrationDto!.UserId =="")
                return BadRequest("el id usuario no puede ser vacio");
            
                if (courseRegistrationDto.CourseId <= 0)
                return BadRequest("el id curso debe ser mayor a 0");

                var curse = await _context.Courses.FindAsync(courseRegistrationDto.CourseId);
                if (curse == null)
                return BadRequest("el id curso no existe");

                var user= await _context.Users.FindAsync(courseRegistrationDto.UserId);
                if (user == null)
                return BadRequest("el id usuario no existe");

                try{
                var response= await _courseRegistrationService.Create(courseRegistrationDto);

                if (response == null)
                    return BadRequest("Hubo un error al inscribir curso");

                return Created( string.Empty ,new {
                    Message = "Curso inscrito" ,
                    UserCourse=response
                });
                   }catch(Exception ex){
                // Log the exception details
                _logger.LogError(ex, "Error al inscribir curso");   
                return StatusCode(500, "Ocurrió un error interno al inscribir curso. Por favor, intente nuevamente más tarde.");
            }
    
        }
    }
}