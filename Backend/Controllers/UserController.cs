using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Dtos;
using Backend.Models;
using System.ComponentModel.DataAnnotations;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController:ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService){
            _userService = userService;
        }

        /// <summary>
        /// Registers a new account.
        /// </summary>
        /// <param name="userDto">The user's details</param>
        /// <returns></returns>
        [HttpPost("Register", Name = "Register")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Register(
            [FromForm, Required] UserInputDto userDto)
        {
            var result = await _userService.Create(userDto, userDto.Password);
            if (result.Succeeded)
                return Ok();
            return BadRequest(result.Errors);
        }

        /// <summary>
        /// Logs in the specified user.
        /// </summary>
        /// <param name="userDto">The user's credentials</param>
        /// <response code="200">Returns the JSON Web Token</response>
        /// <response code="401">Wrong credentials</response>
        [HttpPost("Login", Name = "Login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Login([FromForm, Required] UserLoginDto userDto)
        {
            string token = await _userService.Login(userDto.Email, userDto.Password);
            if (token != "")
                return Ok( new { user_name = userDto.Email, access_token = token });
            return Unauthorized();
        }
        
        /// <summary>
        /// Returns all existing users.
        /// </summary>
        /// <response code="200">Returns all existing users</response>
        /// <response code="404">No user exists</response>
        [HttpGet("Users", Name = "GetAllUsers")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult>GetAll(){
            List<UserGetDto> useResponse= await _userService.GetAll();
            if (useResponse.Count==0)
                return NotFound("No users found");
            return Ok(useResponse);
        }
    }
}