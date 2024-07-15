using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Dtos;
using Backend.Models;
namespace Backend.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class UserController:ControllerBase
    {
        private readonly UserService _userService;
        private readonly AccountService _accountService;

        public UserController(UserService userService,AccountService accountService){
            _userService = userService;
            _accountService = accountService;
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