using System.ComponentModel.DataAnnotations;

namespace SchoolWebApi.Models
{
    public class StudentSubject
    {
        [Key]
        public int StudentId { get; set; }
        [Required]
        public Student Student { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        public StudentSubject() { }

        public StudentSubject(int studentId, int subjectId)
        {
           SubjectId = subjectId;
        }
    }
}