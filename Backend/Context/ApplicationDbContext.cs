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

         public DbSet<CourseTags>CourseTags { get; set; }
        public DbSet <Category>Categories { get; set; } 

        public DbSet<Tags>Tags { get; set; }

        public DbSet<Module>Modules { get; set; }

        public DbSet<ResourceModule>ResourceModules { get; set; }

        public DbSet<CourseModule>CourseModule { get; set; }

        public DbSet<Resource>Resources { get; set; }
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
            
           /* modelBuilder.Entity<CourseTags>()
                .HasOne(cu=>cu.Course)
                .WithMany(c=>c.CourseTags)
                .HasForeignKey(cu=>cu.IdCourse);

            modelBuilder.Entity<CourseTags>()
                .HasOne(t=>t.Tags)
                .WithMany(c=>c.CourseTags)
                .HasForeignKey(t=>t.IdTags);*/

            modelBuilder.Entity<CourseTags>()
              .HasOne(ct => ct.Course)
              .WithMany(c => c.CourseTags)
              .HasForeignKey(ct => ct.IdCourse)
              .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CourseTags>()
              .HasOne(ct => ct.Tags)
              .WithMany(t => t.CourseTags)
              .HasForeignKey(ct => ct.IdTags)
              .OnDelete(DeleteBehavior.Cascade);    

            modelBuilder.Entity<CourseModule>()
                .HasOne(cu=>cu.Course)
                .WithMany(cm=>cm.CourseModules)
                .HasForeignKey(cu=>cu.CourseId);

            modelBuilder.Entity<CourseModule>()
                .HasOne(m=>m.Module)
                .WithMany(cm=>cm.CourseModules)
                .HasForeignKey(m=>m.ModuleId);

            modelBuilder.Entity<ResourceModule>()
                .HasOne(m=>m.Module)
                .WithMany(rm=>rm.ResourceModules)
                .HasForeignKey(m=>m.ModuleId);

            modelBuilder.Entity<ResourceModule>()
                .HasOne(r=>r.Resource)
                .WithMany(rm=>rm.ResourceModules)
                .HasForeignKey(r=>r.ResourceId);                    

        }
    }
}