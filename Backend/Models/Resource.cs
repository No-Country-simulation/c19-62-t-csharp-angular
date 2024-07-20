using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class Resource
    {
        [Key]

        public int Id { get; set; } 
        [Column(TypeName = "nvarchar(256)")]
        public string Name { get; set; }=string.Empty;
        [Column(TypeName = "nvarchar(256)")]
        public string Tipe { get; set; } = string.Empty;
         [Column(TypeName = "nvarchar(max)")]
        public string Link { get; set; } = string.Empty ;
        
          [JsonIgnore]

         public ICollection<ModuleResource> ModuleResources { get; set;}= new List<ModuleResource>();
    }
}