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
    public class ResourceController:ControllerBase
    {
         private readonly ResourceService _resourceService;
        private readonly ILogger<ResourceController> _logger;

        public ResourceController(ResourceService resourceService,ILogger<ResourceController> logger){
            _resourceService = resourceService;
             _logger = logger;
        }

        [Route("CreateResource")]
        [HttpPost]
         public async Task <IActionResult>CreateResource(ResourceDto resourceDto){

            if (resourceDto==null){
                BadRequest("Los datos son requeridos");
            }
            
            try{
            var response= await _resourceService.Create(resourceDto!);

            if (response == null){
                return BadRequest("Hubo un error al crear el recurso");

            }

         return Created( string.Empty ,new {
             Message = "Recurso Registrado" ,
             Resource=response
             });
            }
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear el recurso.");   
            return StatusCode(500, "Ocurrió un error interno al crear el recurso. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}