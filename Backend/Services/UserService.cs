using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Backend.Context;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Backend.Services
{
    public class UserService(
        ApplicationDbContext context,
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration)
    {
        private readonly ApplicationDbContext _context = context;
        private readonly UserManager<User> _userManager = userManager;
        private readonly SignInManager<User> _signInManager = signInManager;
        private readonly RoleManager<IdentityRole> _roleManager = roleManager;
        private readonly IConfiguration _configuration = configuration;

        public async Task<IdentityResult> Create(UserInputDto newuser, string password)
        {
            var user = new User
            {
                Email = newuser.Email,
                UserName = newuser.Email,
                FirstName = newuser.FirstName,
                LastName = newuser.LastName
            };

            var result = await _userManager.CreateAsync(user, password);
            if (result.Succeeded)
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

        public async Task<IdentityResult> AddRole(string email, string role)
        {
            var user = new User();
            user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var result = await _userManager.AddToRoleAsync(user, role);
                if (result.Succeeded)
                    return result;
                else
                    return IdentityResult.Failed(new IdentityError { Description = "Rol no asignado al usuario." });
            }
            return IdentityResult.Failed(new IdentityError { Description = "Usuario no encontrado." });
        }

        public async Task<string> Login(string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null && await _userManager.CheckPasswordAsync(user, password))
                return GenerateJwtToken(user);
            return "";
        }

        public async Task<bool> ExistsByEmail(string email)
        {
            User? user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return false;
            return true;
        }

        public async Task<UserProfileDto> GetByEmail(string email)
        {
            User? user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return new UserProfileDto();

            UserProfileDto userProfileDto = new UserProfileDto
            {
                Email = user.Email!,
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber!
            };
            return userProfileDto;
        }

        public async Task<List<IdentityResult>> UpdateUser(string email, UserUpdateDto userData)
        {
            List<IdentityResult> results = [];
            User? user = await _userManager.FindByEmailAsync(email);

            if (user != null)
            {
                // Update email, password and phone number
                IdentityResult username_result = new();
                IdentityResult email_result = new();
                IdentityResult password_result = new();
                IdentityResult phone_result = new();

                if (user.UserName != userData.Email)
                    username_result = await _userManager.SetUserNameAsync(user, userData.Email);
                if (!username_result.Succeeded)
                    results.Add(email_result);
                if (user.Email != userData.Email)
                    email_result = await _userManager.SetEmailAsync(user, userData.Email);
                if (!email_result.Succeeded)
                    results.Add(email_result);
                if (userData.CurrentPassword != userData.NewPassword)
                    password_result = await _userManager.ChangePasswordAsync(user, userData.CurrentPassword, userData.NewPassword);
                if (!password_result.Succeeded)
                    results.Add(email_result);
                if (user.PhoneNumber != userData.PhoneNumber)
                    phone_result = await _userManager.SetPhoneNumberAsync(user, userData.PhoneNumber);
                if (!phone_result.Succeeded)
                    results.Add(email_result);

                // Update extra details
                user.FirstName = userData.FirstName;
                user.LastName = userData.LastName;
                var update_result = await _userManager.UpdateAsync(user);
                if (!update_result.Succeeded)
                    results.Add(email_result);
            }

            return results;
        }

        public async Task<List<UserGetDto>> GetAll()
        {
            List<User> user = await _context.Users.ToListAsync();

            if (user.Count == 0)
                return [];

            List<UserGetDto> userGetDtos = user.Select(userGetDto => new UserGetDto
            {
                Id = userGetDto.Id,
                Email = userGetDto.Email!,
                FirstName = userGetDto.FirstName,
                LastName = userGetDto.LastName,
                PhoneNumber = userGetDto.PhoneNumber!
            }).ToList();
            return userGetDtos;
        }

        private string GenerateJwtToken(User user)
        {
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

        private async Task<List<string>> GetUserRoles(User user)
        {
            IList<string> roles = await _userManager.GetRolesAsync(user);
            if (roles != null)
                return [.. roles];
            return [];
        }
    }
}