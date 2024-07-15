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
        [Column(TypeName ="varchar(100)")]
        public string Name { get; set; }=string.Empty;    

        [Column(TypeName ="varchar(100)")]
        public string Level { get; set; }=string.Empty;   

        [JsonIgnore] 
        public ICollection<Course>Courses   { get; set; }=new List<Course>();
        
    }
}