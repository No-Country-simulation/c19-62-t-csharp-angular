using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Context
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions options): base(options){

        }

        public DbSet<User> Users { get; set;}
        public DbSet<Course>Courses { get; set; }
        public DbSet<CourseUser>CourseUsers { get; set;}

       protected override void OnModelCreating(ModelBuilder modelBuilder){

    modelBuilder.Entity<CourseUser>()
        .HasOne(cu => cu.Course)
        .WithMany(c => c.CourseUsers)
        .HasForeignKey(cu => cu.CourseId);

    modelBuilder.Entity<CourseUser>()
        .HasOne(cu => cu.User)
        .WithMany(u => u.CourseUsers)
        .HasForeignKey(cu => cu.UserId);
          }

        
    }
}