using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Backend.Services;
using Backend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Backend.Dtos;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class RoleController : Controller
    {
        private readonly RoleService _accountService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        public RoleController(
            RoleService accountService,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration)
        {
            _accountService = accountService;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        /// <summary>
        /// Returns all existing roles.
        /// </summary>
        /// <param></param>
        /// <returns>Returns all existing roles</returns>
        /// <response code="404">No roles found</response>
        [HttpGet("Roles", Name = "GetAllRoles")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAll()
        {
            List<IdentityRole> useResponse = await _accountService.GetAll();

            if (useResponse.Count == 0)
            {
                return NotFound("No Roles found");
            }

            return Ok(useResponse);
        }

        /// <summary>
        /// Creates a new Role.
        /// </summary>
        /// <param role="role">The name of the role to be created</param>
        /// <response code="500">Role already exists / Internal server error</response>
        /// <returns></returns>
        [HttpPost("Create", Name = "CreateRole")]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Create([Required] string role)
        {
            if (ModelState.IsValid)
            {
                bool roleExists = await _roleManager.RoleExistsAsync(role);
                if (roleExists)
                {
                    return StatusCode(500, "Role already exists");
                }
                
                IdentityResult useResponse = await _accountService.Create(role);
                if (useResponse.Succeeded)
                    return Ok(useResponse);
                else
                    Errors(useResponse);
            }
            return StatusCode(500, "ModelState is invalid");
        }

        private void Errors(IdentityResult result)
        {
            foreach (IdentityError error in result.Errors)
                ModelState.AddModelError("", error.Description);
        }
    }
}