using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Backend.Context;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public UserService(
            ApplicationDbContext context,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration){
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> Create(UserInputDto newuser, string password){
            var user = new User
            {
                Email = newuser.Email,
                UserName = newuser.Email,
                FirstName = newuser.FirstName,
                LastName = newuser.LastName
            };

            var result = await _userManager.CreateAsync(user, password);
            if(result.Succeeded)
            {
                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                var newClaims = new List<Claim>()
                {
                    new(ClaimTypes.GivenName, user.FirstName),
                    new(ClaimTypes.Surname, user.LastName)
                };
                await _userManager.AddClaimsAsync(user, newClaims);
            }
            return result;
        }

        public async Task<string> Login(string email, string password){
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null && await _userManager.CheckPasswordAsync(user, password))
                return GenerateJwtToken(user);
            return "";
        }

        public async Task<List<UserGetDto>> GetAll(){
            List<User> user = await _context.Users.ToListAsync();

            if (user.Count==0)
            {
                return new List<UserGetDto>();
            }
            
            List<UserGetDto> userGetDtos=user.Select(userGetDto=>new UserGetDto{
                Id=userGetDto.Id,
                Email=userGetDto.Email!,
                FirstName=userGetDto.FirstName,
                LastName=userGetDto.LastName,
                PhoneNumber=userGetDto.PhoneNumber!
                }).ToList();
            return userGetDtos;
        }

        private string GenerateJwtToken(User user){
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName!),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var userRoles = GetUserRoles(user).GetAwaiter();
            foreach (var userRole in userRoles.GetResult())
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<List<string>> GetUserRoles(User user){
            IList<string> roles = await _userManager.GetRolesAsync(user);
            if (roles != null)
                return [.. roles];
            return [];
        }
    }
}