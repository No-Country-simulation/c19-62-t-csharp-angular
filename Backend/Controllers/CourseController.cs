using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Backend.Context;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController(CourseService courseService, ILogger<CourseController> logger,ApplicationDbContext context) : ControllerBase
    {
        private readonly CourseService _courseService = courseService;
        private readonly ILogger<CourseController> _logger = logger;

        private readonly ApplicationDbContext _context = context;

        [Route("GetAll")]
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

        [Route("GetWhere")]
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

        [Route("CreateCourse")]
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

        [Route("Registration")]
        [HttpPost]
        public async Task<IActionResult>Registration(CourseRegistrationDto courseRegistrationDto)
        {
            if (string.IsNullOrEmpty(courseRegistrationDto!.UserId))
                return BadRequest("El ID de usuario no puede ser vacío.");

            if (courseRegistrationDto.CourseId <= 0)
                return BadRequest("El ID del curso debe ser mayor a 0.");

            var course = await _context.Courses.FindAsync(courseRegistrationDto.CourseId);
            if (course == null)
                return BadRequest("El ID del curso no existe.");

            var user = await _context.Users.FindAsync(courseRegistrationDto.UserId);
            if (user == null)
                return BadRequest("El ID de usuario no existe.");

            try
            {
                var response = await _courseService.Registration(courseRegistrationDto);

                if (response == null)
                    return BadRequest("Hubo un error al inscribir el curso.");

                return Created(string.Empty, new
                {
                    Message = "La inscripción al curso se ha realizado correctamente.",
                    UserCourse = response
                });
            }
            catch (Exception ex)
            {
                // Log the exception details
                _logger.LogError(ex, "Error al inscribir curso");
                return StatusCode(500, "Ocurrió un error interno al inscribir curso. Por favor, intente nuevamente más tarde.");
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

