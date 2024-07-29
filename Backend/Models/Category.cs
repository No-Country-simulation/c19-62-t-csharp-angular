using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }


        [Column(TypeName = "nvarchar(256)")]
        public string Name { get; set; } = String.Empty;


        [JsonIgnore]
        public ICollection<Course> Courses { get; set; } = [];
    }
}