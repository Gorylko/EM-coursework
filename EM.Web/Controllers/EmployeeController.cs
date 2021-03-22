using System.Threading.Tasks;
using EM.Business.Implementations;
using EM.Business.Interfaces;
using EM.Data.Context;
using EM.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _service;
        
        public EmployeeController(IEmployeeService service)
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
    }
}