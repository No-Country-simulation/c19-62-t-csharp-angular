using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Dtos;
namespace Backend.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class UserController:ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService){
            _userService = userService;
        }
        
        [Route("GetAll")]
        [HttpGet]
        public async Task<IActionResult>GetAll(){
            List<UserGetDto> useResponse= await _userService.GetAll();

            if (useResponse.Count==0){
                return  NotFound("No Users found");
            }
            return Ok(useResponse);
        }
        
    }
}