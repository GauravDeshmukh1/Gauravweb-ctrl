using System.ComponentModel.DataAnnotations;

namespace SchoolWebApi.Models
{
    public class Subject
    {
        [Key]
        public int Id { get; set; }
        [Required]  
        public string Name { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
        public IEnumerable<StudentSubject> StudentsSubjects { get; set; }
        public Subject() { }
        
        public Subject(int id, string name, int professorId)


        {
            Id = id;
            Name = name;
            ProfessorId = professorId;
        }
    }
}