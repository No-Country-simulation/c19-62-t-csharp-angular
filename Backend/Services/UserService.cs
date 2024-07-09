using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.Context;
using Backend.Models;
using Backend.Dtos;
namespace Backend.Services

{
    public class UserService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public UserService(AppDbContext context, IConfiguration config){
            _context = context;
            _config = config;
        }

        public async Task<List<UserGetDto>> GetAll(){

        List<User> user =await _context.Users.ToListAsync();

        if (user.Count==0)
        {
         return new List<UserGetDto>();
        }
        List<UserGetDto> userGetDtos=user.Select(userGetDto=>new UserGetDto{
          Id=userGetDto.Id,
          Name=userGetDto.Name,
          UserName=userGetDto.UserName,
          Email=userGetDto.Email,
        }).ToList();
        return userGetDtos;
    }



    }
}