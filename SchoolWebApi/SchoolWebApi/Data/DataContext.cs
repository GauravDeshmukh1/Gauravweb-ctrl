    using Microsoft.EntityFrameworkCore;
using SchoolWebApi.Models;

namespace SchoolWebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Student> Students { get; set; }
        public DbSet<Professor> Professors { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<StudentSubject> StudentsSubjects { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<StudentSubject>()
                .HasKey(AD => new { AD.StudentId, AD.SubjectId });

            builder.Entity<Professor>()
                .HasData(new List<Professor>(){
                    new Professor(1, "Priya"),
                    new Professor(2, "Ram"),
                    new Professor(3, "Rohan"),
                    new Professor(4, "Shyam"),
                    new Professor(5, "Anil"),
                });

            builder.Entity<Subject>()
                .HasData(new List<Subject>{
                    new Subject(1, "Mathematics", 1),
                    new Subject(2, "Physics", 2),
                    new Subject(3, "Marathi", 3),
                    new Subject(4, "English", 4),
                    new Subject(5, "Programming", 5)
                });

            builder.Entity<Student>()
                .HasData(new List<Student>(){
                    new Student(1, "Vaishnavi", "Malhotra", "33225555"),
                    new Student(2, "Pratham", "Deshmukh", "3354288"),
                    new Student(3, "Paresh", "Rawal", "55668899"),
                    new Student(4, "Angad", "Bedi", "6565659"),
                    new Student(5, "Udayan", "Bhosale", "565685415"),
                    new Student(6, "Vaibhavi", "Tawade", "456454545"),
                    new Student(7, "Anjali", "Kumar", "9874512")
                });

            builder.Entity<StudentSubject>()
                .HasData(new List<StudentSubject>() {
                    new StudentSubject() {StudentId = 1, SubjectId = 2 },
                    new StudentSubject() {StudentId = 1, SubjectId = 4 },
                    new StudentSubject() {StudentId = 1, SubjectId = 5 },
                    new StudentSubject() {StudentId = 2, SubjectId = 1 },
                    new StudentSubject() {StudentId = 2, SubjectId = 2 },
                    new StudentSubject() {StudentId = 2, SubjectId = 5 },
                    new StudentSubject() {StudentId = 3, SubjectId = 1 },
                    new StudentSubject() {StudentId = 3, SubjectId = 2 },
                    new StudentSubject() {StudentId = 3, SubjectId = 3 },
                    new StudentSubject() {StudentId = 4, SubjectId = 1 },
                    new StudentSubject() {StudentId = 4, SubjectId = 4 },
                    new StudentSubject() {StudentId = 4, SubjectId = 5 },
                    new StudentSubject() {StudentId = 5, SubjectId = 4 },
                    new StudentSubject() {StudentId = 5, SubjectId = 5 },
                    new StudentSubject() {StudentId = 6, SubjectId = 1 },
                    new StudentSubject() {StudentId = 6, SubjectId = 2 },
                    new StudentSubject() {StudentId = 6, SubjectId = 3 },
                    new StudentSubject() {StudentId = 6, SubjectId = 4 },
                    new StudentSubject() {StudentId = 7, SubjectId = 1 },
                    new StudentSubject() {StudentId = 7, SubjectId = 2 },
                    new StudentSubject() {StudentId = 7, SubjectId = 3 },
                    new StudentSubject() {StudentId = 7, SubjectId = 4 },
                    new StudentSubject() {StudentId = 7, SubjectId = 5 }
                });
            }
        }
    }