using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Module
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }=string.Empty;

        [JsonIgnore]
        public ICollection<CourseModule> CourseModules { get; set;}= new List<CourseModule>();

        [JsonIgnore]
        public ICollection<ResourceModule> ResourceModules { get; set;}= new List<ResourceModule>();

    }
}