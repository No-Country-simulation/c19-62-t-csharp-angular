using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Resource
    {
        [Key]

        public int Id { get; set; } 

        public string Name { get; set; }=string.Empty;

        public string Tipe { get; set; } = string.Empty;

        public string Link { get; set; } = string.Empty ;
        
          [JsonIgnore]

         public ICollection<ResourceModule> ResourceModules { get; set;}= new List<ResourceModule>();
    }
}