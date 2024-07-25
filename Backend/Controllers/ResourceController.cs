using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers
{
    [Route("api/resource")]
    [ApiController]
    public class ResourceController(ResourceService resourceService, ILogger<ResourceController> logger) : ControllerBase
    {
        private readonly ResourceService _resourceService = resourceService;
        private readonly ILogger<ResourceController> _logger = logger;

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateResource(ResourceDto resourceDto)
        {
            if (resourceDto.Name.IsNullOrEmpty() || resourceDto.Type.IsNullOrEmpty() || resourceDto.Link.IsNullOrEmpty())
            {
                return BadRequest("Los datos son requeridos");
            }

            try
            {
                var response = await _resourceService.Create(resourceDto!);

                if (response == null)
                {
                    return BadRequest("Hubo un error al crear el Recurso");

                }

                return Created(string.Empty, new
                {
                    Message = "Recurso registrado",
                    Resource = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Recurso.");
                return StatusCode(500, "Ocurrió un error interno al crear el Recurso. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var response = await _resourceService.GetAll();

                if (response == null)
                    return BadRequest("Hubo un error al obtener los Recursos");

                return Ok(new
                {
                    Message = "Se obtuvieron los Recursos correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener los Recursos.");
                return StatusCode(500, "Ocurrió un error interno al obtener los Recursos. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{resourceId}")]
        [HttpGet]
        public async Task<IActionResult> GetById(int resourceId)
        {
            try
            {
                var response = await _resourceService.GetById(resourceId);

                if (response == null)
                    return BadRequest("Hubo un error al obtener el Recurso");

                return Ok(new
                {
                    Message = "Se obtuvo el Recurso correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener el Recurso.");
                return StatusCode(500, "Ocurrió un error interno al obtener el Recurso. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateById(ResourceUpdateDto resourceDto)
        {
            if (resourceDto.Name.IsNullOrEmpty() || resourceDto.Type.IsNullOrEmpty() || resourceDto.Link.IsNullOrEmpty())
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _resourceService.Update(resourceDto!);

                if (response == null)
                    return BadRequest("Hubo un error al actualizar el Recurso");

                return Created(string.Empty, new
                {
                    Message = "Recurso actualizado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al actualizar el Recurso.");
                return StatusCode(500, "Ocurrió un error interno al actualizar el Recurso. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{resourceId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteById(int resourceId)
        {
            if (resourceId == 0)
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _resourceService.Delete(resourceId);

                if (response == null)
                    return BadRequest("Hubo un error al borrar el Recurso");

                return Created(string.Empty, new
                {
                    Message = "Recurso borrado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al borrar el Recurso.");
                return StatusCode(500, "Ocurrió un error interno al borrar el Recurso. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}