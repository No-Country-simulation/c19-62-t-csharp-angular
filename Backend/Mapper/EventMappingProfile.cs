using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Models;
using AutoMapper;

namespace Backend.mapper
{

    public class EventMappingProfile:Profile
{
    public EventMappingProfile()
    {
         CreateMap<User, UserGetDto>()
        .ForMember(dest => dest.CourseUsers, opt => opt.MapFrom(src => src.CourseUsers));
        CreateMap<CourseUser, CourseUserDto>();
         CreateMap<Course,CourseGetDto>();

       

    }
}
}