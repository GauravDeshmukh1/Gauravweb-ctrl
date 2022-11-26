using SchoolWebApi.Models;

namespace SchoolWebApi.Data
{
    public interface IRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //STUDENT
        Task<Student[]> GetAllStudentsAsync(bool includeProfessor);
        Task<Student[]> GetStudentsAsyncBySubjectId(int subjectId, bool includeSubject);
        Task<Student> GetStudentAsyncById(int studentId, bool includeProfessor);

        //PROFESSOR
        Task<Professor[]> GetAllProfessorsAsync(bool includeStudent);
        Task<Professor> GetProfessorAsyncById(int professorId, bool includeStudent);
        Task<Professor[]> GetProfessorsAsyncByStudentId(int studentId, bool includeSubject);
    }
}