using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class ResourceModule
    {
         [Key]

        public int Id { get; set; }

        public int ModuleId { get; set; }   

        public int ResourceId { get; set; }

        public Module Module { get; set; }=new Module();
        public Resource Resource { get; set; } = new Resource();
    }
}