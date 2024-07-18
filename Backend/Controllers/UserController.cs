using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Dtos;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

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
                return Ok( new { email = userDto.Email, access_token = token });
            return Unauthorized();
        }

        /// <summary>
        /// Returns the user's profile information.
        /// </summary>
        /// <param name="email">The user's email</param>
        /// <response code="200">Returns the user's profile information.</response>
        /// <response code="404">User doesn't exist</response>
        [HttpGet("{email}", Name = "GetUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult>GetByEmail([Required] string email)
        {
            var userExists = await _userService.ExistsByEmail(email);
            if (!userExists)
                return NotFound("User doesn't exist");
            UserProfileDto useResponse = await _userService.GetByEmail(email);
            return Ok(useResponse);
        }

        /// <summary>
        /// Modifies the user's profile information.
        /// </summary>
        /// <param name="email">The user's email</param>
        /// <param name="userData">The user's profile information</param>
        /// <response code="200">Modifies the user's profile information</response>
        /// <response code="404">User doesn't exist</response>
        [HttpPut("UpdateProfile", Name = "UpdateProfile")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult>UpdateUser([Required] string email, [FromForm, Required] UserUpdateDto userData)
        {
            var userExists = await _userService.ExistsByEmail(email);
            if (!userExists)
                return NotFound("User doesn't exist");
            List<IdentityResult> useResponse = await _userService.UpdateUser(email, userData);
            if (useResponse.IsNullOrEmpty())
                return Ok("User profile updated successfully");
            else
                Errors(useResponse);
            return StatusCode(500, "Something went wrong, user profile could've been updated partially");
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
            List<UserGetDto> useResponse = await _userService.GetAll();
            if (useResponse.Count==0)
                return NotFound("No users found");
            return Ok(useResponse);
        }

        private void Errors(List<IdentityResult> results)
        {
            foreach (IdentityResult result in results)
            {
                foreach (IdentityError error in result.Errors)
                    ModelState.AddModelError("", error.Description);
            } 
        }
    }
}