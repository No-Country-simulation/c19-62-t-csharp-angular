using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers
{
    [Route("api/course")]
    [ApiController]
    public class CourseController(
        CourseService courseService,
        ModuleService moduleService,
        ResourceService resourceService,
        CourseModuleService courseModuleService,
        ModuleResourceService moduleResourceService,
        ApplicationDbContext context,
        ILogger<CourseController> logger) : ControllerBase
    {
        private readonly CourseService _courseService = courseService;
        private readonly ModuleService _moduleService = moduleService;
        private readonly ResourceService _resourceService = resourceService;
        private readonly CourseModuleService _courseModuleService = courseModuleService;
        private readonly ModuleResourceService _moduleResourceService = moduleResourceService;
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<CourseController> _logger = logger;


        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateCourse(CourseInputDto courseInputDto)
        {
            var validationErrors = ValidateCourseInputDto(courseInputDto);
            if (validationErrors.Any())
            {
                return BadRequest(new { Errors = validationErrors });
            }

            try
            {
                var response = await _courseService.Create(courseInputDto!);

                if (response == null)
                {
                    return BadRequest("Hubo un error al crear el curso");
                }

                return Created(string.Empty, new
                {
                    Message = "Curso Registrado",
                    Course = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el curso.");
                return StatusCode(500, "Ocurrió un error interno al crear el curso. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                List<CourseGetDto> courseResponse = await _courseService.GetAll();
                if (courseResponse.Count == 0)
                {
                    return NotFound("No courses found");
                }

                return Ok(courseResponse);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error retrieving courses: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        [Route("{courseId}")]
        [HttpGet]
        public async Task<IActionResult> GetWhere(int courseId)
        {
            var course = await _courseService.GetWhere(courseId);
            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }

        [Route("search")]
        [HttpGet]
        public async Task<IActionResult> SearchCourses([FromQuery] CourseGetDto courseGetDto)
        {
            if (string.IsNullOrWhiteSpace(courseGetDto.Title) &&
            string.IsNullOrWhiteSpace(courseGetDto.CategoryName) &&
            string.IsNullOrWhiteSpace(courseGetDto.TagName) &&
            string.IsNullOrWhiteSpace(courseGetDto.Level))
            {
                return BadRequest("Al menos uno de los criterios de búsqueda debe ser proporcionado.");
            }

            try
            {
                var courses = await _courseService.SearchCourses(courseGetDto);

                if (courses == null || courses.Count == 0)
                {
                    return NotFound("No se encontraron cursos que coincidan con los criterios de búsqueda.");
                }

                return Ok(courses);
            }
            catch (Exception ex)
            {
                // Manejo de excepciones general
                return StatusCode(500, $"Se produjo un error en el servidor: {ex.Message}");
            }
        }

        [Route("module/add_to_course")]
        [HttpPost]
        public async Task<IActionResult> AddModuleToCourse(ModuleCreateDto moduleDto)
        {
            if (moduleDto.Number == 0 || moduleDto.Name.IsNullOrEmpty())
                return BadRequest("Los datos son requeridos");

            Module? module;
            try
            {
                module = await _moduleService.Create(moduleDto!);

                if (module == null)
                {
                    return BadRequest("Hubo un error al crear el Modulo");
                }
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Modulo.");
                return StatusCode(500, "Ocurrió un error interno al crear el Modulo. Por favor, intente nuevamente más tarde.");
            }

            CourseModuleDto courseModuleDto = new()
            {
                CourseId = moduleDto.CourseId,
                ModuleId = module.Id,
            };

            if (courseModuleDto == null)
                BadRequest("Los datos son requeridos");

            if (courseModuleDto!.CourseId <= 0)
                return BadRequest("el id curso debe ser mayor a 0");

            if (courseModuleDto.ModuleId <= 0)
                return BadRequest("el id modulo debe ser mayor a 0");

            var course = await _context.Courses.FindAsync(courseModuleDto.CourseId);
            if (course == null)
                return BadRequest("el id curso no existe");

            module = await _context.Modules.FindAsync(courseModuleDto.ModuleId);
            if (module == null)
                return BadRequest("el id modulo no existe");

            try
            {
                var response = await _courseModuleService.Create(courseModuleDto);

                if (response == null)
                    return BadRequest("Hubo un error al registrar el modulo");

                return Created(string.Empty, new
                {
                    Message = "Modulo registrado",
                    CourseModule = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al registrar el modulo.");
                return StatusCode(500, "Ocurrió un error interno al registrar el modulo. Por favor, intente nuevamente más tarde.");
            }
        }

        [Route("resource/add_to_module")]
        [HttpPost]
        public async Task<IActionResult> AddResourceToModule(ResourceCreateDto resourceDto)
        {
            if (resourceDto.Name.IsNullOrEmpty() || resourceDto.Type.IsNullOrEmpty() || resourceDto.Link.IsNullOrEmpty())
            {
                return BadRequest("Los datos son requeridos");
            }

            Resource? resource;
            try
            {
                resource = await _resourceService.Create(resourceDto!);

                if (resource == null)
                {
                    return BadRequest("Hubo un error al crear el Recurso");

                }
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al crear el Recurso.");
                return StatusCode(500, "Ocurrió un error interno al crear el Recurso. Por favor, intente nuevamente más tarde.");
            }

            ModuleResourceDto moduleResourceDto = new()
            {
                ModuleId = resourceDto.ModuleId,
                ResourceId = resource.Id,
            };

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
                    return BadRequest("Hubo un error al registrar el recurso");

                }

                return Created(string.Empty, new
                {
                    Message = "Recurso registrado",
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
                _logger.LogError(ex, "Error al registrar el recurso.");
                return StatusCode(500, "Ocurrió un error interno al registrar el recurso. Por favor, intente nuevamente más tarde.");
            }
        }

        private List<string> ValidateCourseInputDto(CourseInputDto dto)
        {
            var errors = new List<string>();

            if (dto.CategoryId == 0)
                errors.Add("IdCategory es requerido.");

            if (string.IsNullOrWhiteSpace(dto.Title))
                errors.Add("Title es requerido.");

            if (string.IsNullOrWhiteSpace(dto.Description))
                errors.Add("Description es requerido.");

            if (string.IsNullOrWhiteSpace(dto.Prerequisites))
                errors.Add("Prerequisites es requerido.");

            if (string.IsNullOrWhiteSpace(dto.BulletPoints))
                errors.Add("BulletPoints es requerido.");

            if (dto.DurationHours <= 0)
                errors.Add("DurationHours es requerido y debe ser mayor que 0.");

            return errors;
        }
    }
}

