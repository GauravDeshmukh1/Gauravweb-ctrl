using System.ComponentModel.DataAnnotations;

namespace SchoolWebApi.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Telephone{ get; set; }
        public IEnumerable<StudentSubject> StudentsSubjects { get; set; }
        
        
        public Student() {}
        public Student(int id, string name, string lastname, string telephone)
        {
            Id = id;
            Name = name;
            Lastname = lastname;
            Telephone = telephone;
        }


    }
}