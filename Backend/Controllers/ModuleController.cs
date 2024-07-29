using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers
{
    [Route("api/module")]
    [ApiController]
    public class ModuleController(ModuleService moduleService, ILogger<ModuleController> logger) : ControllerBase
    {
        private readonly ModuleService _moduleService = moduleService;
        private readonly ILogger<ModuleController> _logger = logger;

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateModule(ModuleCreateDto moduleDto)
        {
            if (moduleDto.Number == 0 || moduleDto.Name.IsNullOrEmpty())
            {
                return BadRequest("Los datos son requeridos");
            }

            try
            {
                var response = await _moduleService.Create(moduleDto!);

                if (response == null)
                {
                    return BadRequest("Hubo un error al crear el Modulo");

                }

                return Created(string.Empty, new
                {
                    Message = "Modulo registrado",
                    Module = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Modulo.");
                return StatusCode(500, "Ocurrió un error interno al crear el Modulo. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var response = await _moduleService.GetAll();

                if (response == null)
                    return BadRequest("Hubo un error al obtener los Modulos");

                return Ok(new
                {
                    Message = "Se obtuvieron los Modulos correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener los Modulos.");
                return StatusCode(500, "Ocurrió un error interno al obtener los Modulos. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{moduleId}")]
        [HttpGet]
        public async Task<IActionResult> GetById(int moduleId)
        {
            try
            {
                var response = await _moduleService.GetById(moduleId);

                if (response == null)
                    return BadRequest("Hubo un error al obtener el Modulo");

                return Ok(new
                {
                    Message = "Se obtuvo el Modulo correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener el Modulo.");
                return StatusCode(500, "Ocurrió un error interno al obtener el Modulo. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateById(ModuleDto moduleDto)
        {
            if (moduleDto.Number == 0 || moduleDto.Name.IsNullOrEmpty())
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _moduleService.Update(moduleDto!);

                if (response == null)
                    return BadRequest("Hubo un error al actualizar el Modulo");

                return Created(string.Empty, new
                {
                    Message = "Modulo actualizado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al actualizar el Modulo.");
                return StatusCode(500, "Ocurrió un error interno al actualizar el Modulo. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{moduleId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteById(int moduleId)
        {
            if (moduleId == 0)
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _moduleService.Delete(moduleId);

                if (response == null)
                    return BadRequest("Hubo un error al borrar el Modulo");

                return Created(string.Empty, new
                {
                    Message = "Modulo borrado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al borrar el Modulo.");
                return StatusCode(500, "Ocurrió un error interno al borrar el Modulo. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}