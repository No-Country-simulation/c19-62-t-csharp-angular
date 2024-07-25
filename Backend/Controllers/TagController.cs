using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers
{
    [Route("api/tag")]
    [ApiController]
    public class TagController(TagsService tagsService, ILogger<TagController> logger) : ControllerBase
    {
        private readonly TagsService _tagsService = tagsService;
        private readonly ILogger<TagController> _logger = logger;

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> Create(TagCreateDto tagDto)
        {
            if (tagDto.Name.IsNullOrEmpty())
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _tagsService.Create(tagDto!);

                if (response == null)
                    return BadRequest("Hubo un error al crear el Tag");

                return Created(string.Empty, new
                {
                    Message = "Tag registrado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Tag.");
                return StatusCode(500, "Ocurrió un error interno al crear el Tag. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var response = await _tagsService.GetAll();

                if (response == null)
                    return BadRequest("Hubo un error al obtener los Tags");

                return Ok(new
                {
                    Message = "Se obtuvieron los Tags correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener los Tags.");
                return StatusCode(500, "Ocurrió un error interno al obtener los Tags. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{tagId}")]
        [HttpGet]
        public async Task<IActionResult> GetById(int tagId)
        {
            try
            {
                var response = await _tagsService.GetById(tagId);

                if (response == null)
                    return BadRequest("Hubo un error al obtener el Tag");

                return Ok(new
                {
                    Message = "Se obtuvo el Tag correctamente",
                    List = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al obtener el Tag.");
                return StatusCode(500, "Ocurrió un error interno al obtener el Tag. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpPut]
        public async Task<IActionResult> UpdateById(TagUpdateDto tagDto)
        {
            if (tagDto.Name.IsNullOrEmpty())
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _tagsService.Update(tagDto!);

                if (response == null)
                    return BadRequest("Hubo un error al actualizar el Tag");

                return Created(string.Empty, new
                {
                    Message = "Tag actualizado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al actualizar el Tag.");
                return StatusCode(500, "Ocurrió un error interno al actualizar el Tag. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("{tagId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteById(int tagId)
        {
            if (tagId == 0)
                return BadRequest("Los datos son requeridos");

            try
            {
                var response = await _tagsService.Delete(tagId);

                if (response == null)
                    return BadRequest("Hubo un error al borrar el Tag");

                return Created(string.Empty, new
                {
                    Message = "Tag borrado",
                    Task = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al borrar el Tag.");
                return StatusCode(500, "Ocurrió un error interno al borrar el Tag. Por favor, intente nuevamente más tarde.");
            }
        }
    }
}