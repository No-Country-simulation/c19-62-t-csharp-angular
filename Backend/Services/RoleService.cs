using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Backend.Context;

namespace Backend.Services
{
    public class RoleService(ApplicationDbContext context, IConfiguration config, RoleManager<IdentityRole> roleManager)
    {
        private readonly ApplicationDbContext _context = context;
        private readonly IConfiguration _config = config;
        private readonly RoleManager<IdentityRole> _roleManager = roleManager;

        public async Task<List<IdentityRole>> GetAll(){
            List<IdentityRole> roles = await _roleManager.Roles.ToListAsync();

            if (roles.Count==0)
            {
                return [];
            }

            return roles;
        }

        public async Task<IdentityResult> Create(string name){
            IdentityResult result = await _roleManager.CreateAsync(new IdentityRole(name));
            return result;
        }
    }
}