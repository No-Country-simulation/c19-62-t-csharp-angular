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
    public class CourseController:ControllerBase
    {
        private readonly CourseService _courseService;

        public CourseController(CourseService courseService){
            _courseService = courseService;
        }

        [Route("GetAll")]
        [HttpGet]
        public async Task <IActionResult>GetAll(){

            try{
            List<CourseGetDto> courseResponse=await _courseService.GetAll();
            if (courseResponse.Count==0){
                return NotFound("No courses found");
            }

            return Ok(courseResponse);
            }
            catch(Exception ex){
                Console.WriteLine($"Error retrieving courses: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}