using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Backend.Services;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly AccountService _accountService;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(AccountService accountService, RoleManager<IdentityRole> roleManager)
        {
            _accountService = accountService;
            _roleManager = roleManager;
        }

        private void Errors(IdentityResult result)
        {
            foreach (IdentityError error in result.Errors)
                ModelState.AddModelError("", error.Description);
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