using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class TagsController:ControllerBase
    {
        private readonly TagsService _tagsService;
        private readonly ILogger<TagsController> _logger;

        public TagsController(TagsService tagsService,ILogger<TagsController> logger){
            _tagsService = tagsService;
             _logger = logger;
        }
         
         [Route("CreateTags")]
        [HttpPost]
         public async Task <IActionResult>CreateTags(TagsDto tagsDto){

            if (tagsDto==null){
                BadRequest("Los datos son requeridos");
            }
            
            try{
            var response= await _tagsService.Create(tagsDto!);

            if (response == null){
                return BadRequest("Hubo un error al crear la Tags");

            }

         return Created( string.Empty ,new {
             Message = "Tags Registrado" ,
             Task=response
             });
            } 
            catch(Exception ex){
             // Log the exception details
              _logger.LogError(ex, "Error al crear la Tags.");   
            return StatusCode(500, "Ocurrió un error interno al crear la Tags. Por favor, intente nuevamente más tarde.");
            }
        }
        
    }
}