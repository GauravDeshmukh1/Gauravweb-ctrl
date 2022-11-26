using System.ComponentModel.DataAnnotations;

namespace SchoolWebApi.Models
{
    public class Professor
    {
        [Key]
        public int Id { get; set; }

        [Required]  
        public string Name { get; set; }
        public IEnumerable<Subject> Subjects { get; set; }

        public Professor() { }

        public Professor(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}