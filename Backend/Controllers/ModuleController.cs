using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;


namespace Backend.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class ModuleController:ControllerBase
    {
         private readonly ModuleService _moduleService;
        private readonly ILogger<ModuleController> _logger;

        public ModuleController(ModuleService moduleService,ILogger<ModuleController> logger){

            _logger = logger;
            _moduleService=moduleService;

        }

        [Route("CreateModule")]
        [HttpPost]
         public async Task <IActionResult>CreateModule(ModuleDto moduleDto){

            if (moduleDto==null){
                BadRequest("Los datos son requeridos");
            }
            
            try{
            var response= await _moduleService.Create(moduleDto!);

            if (response == null){
                return BadRequest("Hubo un error al crear el modulo");

            }

         return Created( string.Empty ,new {
             Message = "modulo Registrado" ,
             Module=response
             });
            } 
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear el modulo.");   
            return StatusCode(500, "Ocurrió un error interno al crear el modulo. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}