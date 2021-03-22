using System.Threading.Tasks;
using EM.Business.Interfaces;
using EM.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly IEmployeeService _service;
        
        public EmployeesController(IEmployeeService service)
        {
            _service = service;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            return Ok(await _service.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            return Ok(await _service.GetById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Save(Employee employee)
        {
            await _service.Save(employee);
            
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);

            return Ok();
        }
        
        [HttpPut]
        public async Task<IActionResult> Update(Employee employee)
        {
            await _service.Update(employee);

            return Ok();
        }
    }
}