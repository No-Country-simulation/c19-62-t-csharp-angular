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
        private readonly AccountService _accountService;

        public UserController(UserService userService,AccountService accountService){
            _userService = userService;
            _accountService = accountService;
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
        /// <param name="email">The user's email</param>
        /// <param name="password">The user's password</param>
        /// <returns>Returns a JSON Web Token</returns>
        /// <response code="200">Returns the JSON Web Token</response>
        /// <response code="401">Wrong credentials</response>
        [HttpPost("Account/Login", Name = "Login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Login([FromForm, Required] string email, [FromForm, Required] string password)
        {
            string token = await _userService.Login(email, password);
            if (token != "")
                return Ok( new { access_token = token, token_type = "Bearer", expires_in = 60 * 30 });
            return Unauthorized();
        }
        
        [Route("GetAll")]
        [HttpGet]
        public async Task<IActionResult>GetAll(){
            List<UserGetDto> useResponse= await _userService.GetAll();
            if (useResponse.Count==0)
                return  NotFound("No Users found");
            return Ok(useResponse);
        }
    }
}