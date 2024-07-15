using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Backend.Models;
using Backend.models;

namespace Backend.Context
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options){
        }

        public DbSet<Course>Courses { get; set; }
        public DbSet<CourseUser>CourseUsers { get; set;}

        public DbSet <Category>Categories { get; set; } 


        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<CourseUser>()
                .HasOne(cu => cu.Course)
                .WithMany(c => c.CourseUsers)
                .HasForeignKey(cu => cu.CourseId);

            modelBuilder.Entity<CourseUser>()
                .HasOne(cu => cu.User)
                .WithMany(u => u.CourseUsers)
                .HasForeignKey(cu => cu.UserId);

           modelBuilder.Entity<Course>()
        .HasOne(c => c.Category) // Referencia a Category
        .WithMany(ca => ca.Courses) // Relación inversa en Category
        .HasForeignKey(c => c.IdCategory) // Clave foránea en Course
        .OnDelete(DeleteBehavior.Restrict); // Comportamiento al eliminar
        }
    }
}

  /*modelBuilder.Entity<Course>()
        .HasOne(c => c.Category)
        .WithMany(c => c.Courses)
        .HasForeignKey(c => c.IdCategory)
        .OnDelete(DeleteBehavior.Restrict); // O el co*/