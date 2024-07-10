using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Backend.Context;
namespace Backend.Services

{
    public class RoleService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _config;

        public RoleService(ApplicationDbContext context, IConfiguration config){
            _context = context;
            _config = config;
        }

        public async Task<List<IdentityRole>> GetAll(){
            List<IdentityRole> roles = await _context.Roles.ToListAsync();

            if (roles.Count==0)
            {
                return new List<IdentityRole>();
            }

            return roles;
        }
    }
}