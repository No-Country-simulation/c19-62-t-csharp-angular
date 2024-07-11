using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Backend.Services;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly AccountService _accountService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        public AccountController(
            AccountService accountService,
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
        
        private void Errors(IdentityResult result)
        {
            foreach (IdentityError error in result.Errors)
                ModelState.AddModelError("", error.Description);
        }

        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> Register([Required] string email, [Required] string password, [Required] string name)
        {
            // TODO: VALIDAR LOS CAMPOS ADICIONALES A LOS QUE PROVEE IDENTITY
            var user = new User { Email = email, UserName = email, Name = name };
            var result = await _userManager.CreateAsync(user, password);
            if (result.Succeeded)
            {
                return Ok(new { Result = "User created successfully" });
            }
            return BadRequest(result.Errors);
        }

        [Route("GetRoles")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<IdentityRole> useResponse = await _accountService.GetAll();

            if (useResponse.Count == 0)
            {
                return NotFound("No Roles found");
            }

            return Ok(useResponse);
        }

        [Route("CreateRole")]
        [HttpPost]
        public async Task<IActionResult> Create([Required] string name)
        {
            if (ModelState.IsValid)
            {
                bool roleExists = await _roleManager.RoleExistsAsync(name);
                if (roleExists)
                {
                    return StatusCode(500, "Role already exists");
                }
                
                IdentityResult useResponse = await _accountService.Create(name);
                if (useResponse.Succeeded)
                    return Ok(useResponse);
                else
                    Errors(useResponse);
            }
            return View(name);
        }
    }
}