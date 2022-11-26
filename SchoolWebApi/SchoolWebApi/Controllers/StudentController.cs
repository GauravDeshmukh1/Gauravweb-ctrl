using Microsoft.AspNetCore.Mvc;
using SchoolWebApi.Data;
using SchoolWebApi.Models;

namespace SchoolWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IRepository _repository;

        public StudentController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repository.GetAllStudentsAsync(true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("{StudentId}")]
        public async Task<IActionResult> GetByStudentId(int StudentId)
        {
            try
            {
                var result = await _repository.GetStudentAsyncById(StudentId, true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("ByDisc/{subjectId}")]
        public async Task<IActionResult> GetBySubjectId(int subjectId)
        {
            try
            {
                var result = await _repository.GetStudentsAsyncBySubjectId(subjectId, false);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> post(Student model)
        {
            try
            {
                _repository.Add(model);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{studentId}")]
        public async Task<IActionResult> put(int studentId, Student model)
        {
            try
            {
                var student = await _repository.GetStudentAsyncById(studentId, false);
                if(student == null) return NotFound();

                _repository.Update(model);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{studentId}")]
        public async Task<IActionResult> delete(int studentId)
        {
            try
            {
                var student = await _repository.GetStudentAsyncById(studentId, false);
                if(student == null) return NotFound();

                _repository.Delete(student);

                if (await _repository.SaveChangesAsync())
                {
                    return Ok("Deleted");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }

            return BadRequest();
        }

    }

}