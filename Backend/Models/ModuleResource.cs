using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class ModuleResource
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "int")]
        public int ModuleId { get; set; }
        [Column(TypeName = "int")]
        public int ResourceId { get; set; }

        public Module Module { get; set; } = new Module();
        public Resource Resource { get; set; } = new Resource();
    }
}