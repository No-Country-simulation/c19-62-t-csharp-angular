using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Backend.Services;
using Backend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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
        public async Task<IActionResult> Register([Required] string email, [Required] string password, [Required] string firstName, [Required] string lastName)
        {
            // TODO: VALIDAR LOS CAMPOS ADICIONALES A LOS QUE PROVEE IDENTITY
            var user = new User { Email = email, UserName = email, FirstName = firstName, LastName = lastName };
            var result = await _userManager.CreateAsync(user, password);
            if (result.Succeeded)
            {
                return Ok(new { Result = "User created successfully" });
            }
            return BadRequest(result.Errors);
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([Required] string email, [Required] string password)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null && await _userManager.CheckPasswordAsync(user, password))
            {
                var token = GenerateJwtToken(user);
                return Ok(new { Token = token });
            }
            return Unauthorized();
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName!),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);
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