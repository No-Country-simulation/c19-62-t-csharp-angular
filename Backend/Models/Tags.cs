using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace Backend.Models

{
    public class Tags
    {
        [Key]
        public int Id { get; set; } 

        public string Name { get; set; } = string.Empty;
     
     [JsonIgnore]
      public ICollection<CourseTags> CourseTags { get; set;}= new List<CourseTags>();


    }
}