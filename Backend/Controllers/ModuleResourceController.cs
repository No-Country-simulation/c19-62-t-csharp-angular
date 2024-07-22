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
    public class ModuleResourceController(ModuleResourceService moduleResourceService, ILogger<ModuleResourceController> logger, ApplicationDbContext context) : ControllerBase
    {
        private readonly ModuleResourceService _moduleResourceService = moduleResourceService;
        private readonly ILogger<ModuleResourceController> _logger = logger;
        private readonly ApplicationDbContext _context = context;

        [Route("CreateModuleResource")]
        [HttpPost]
        public async Task<IActionResult> CreateModuleResource(ModuleResourceDto moduleResourceDto)
        {
            if (moduleResourceDto == null)
                BadRequest("Los datos son requeridos");

            if (moduleResourceDto!.ModuleId <= 0)
                return BadRequest("id modulo debe ser mayor a 0");

            if (moduleResourceDto.ResourceId <= 0)
                return BadRequest("id  recurso debe ser mayor a 0");

            var modulo = await _context.Modules.FindAsync(moduleResourceDto.ModuleId);
            if (modulo == null)
                return BadRequest("id modulo no existe");

            var recurso = await _context.Resources.FindAsync(moduleResourceDto.ResourceId);
            if (recurso == null)
                return BadRequest("id recurso no existe");

            try
            {
                var response = await _moduleResourceService.Create(moduleResourceDto);

                if (response == null)
                {
                    return BadRequest("Hubo un error al crear el modulo recurso");

                }

                return Created(string.Empty, new
                {
                    Message = "Modulo Recurso Registrado",
                    ModuleResource = response
                });
            }
            catch (ArgumentException ex)
            {
                // Log and return bad request for validation errors or missing entities
                _logger.LogError(ex, "Validation or not found error: {Message}", ex.Message);
                return BadRequest(ex.Message);
            }

            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Modulo Recurso.");
                return StatusCode(500, "Ocurrió un error interno al crear el CModulo Recurso. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}