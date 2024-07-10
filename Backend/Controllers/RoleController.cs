using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Backend.Services;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoleController : Controller
    {
        private readonly RoleService _roleService;
        private RoleManager<IdentityRole> roleManager;
        public RoleController(RoleManager<IdentityRole> roleMgr, RoleService roleService)
        {
            roleManager = roleMgr;
            _roleService = roleService;
        }

        private void Errors(IdentityResult result)
        {
            foreach (IdentityError error in result.Errors)
                ModelState.AddModelError("", error.Description);
        }

        [Route("GetAll")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<IdentityRole> useResponse = await _roleService.GetAll();

            if (useResponse.Count == 0)
            {
                return NotFound("No Roles found");
            }

            return Ok(useResponse);
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IActionResult> Create([Required] string name)
        {
            if (ModelState.IsValid)
            {
                IdentityResult result = await roleManager.CreateAsync(new IdentityRole(name));
                if (result.Succeeded)
                    return RedirectToAction("Index");
                else
                    Errors(result);
            }
            return View(name);
        }
    }
}