using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Context;

namespace Backend.Services
{
    public class AccountService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _config;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountService(ApplicationDbContext context, IConfiguration config, RoleManager<IdentityRole> roleManager){
            _context = context;
            _config = config;
            _roleManager = roleManager;
        }

        public async Task<List<IdentityRole>> GetAll(){
            List<IdentityRole> roles = await _roleManager.Roles.ToListAsync();

            if (roles.Count==0)
            {
                return new List<IdentityRole>();
            }

            return roles;
        }

        public async Task<IdentityResult> Create(string name){
            IdentityResult result = await _roleManager.CreateAsync(new IdentityRole(name));
            return result;
        }
    }
}