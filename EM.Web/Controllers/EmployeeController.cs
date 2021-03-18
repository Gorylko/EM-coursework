using System.Threading.Tasks;
using EM.Data.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : Controller
    {
        private readonly EmContext _context;
        
        public EmployeeController(EmContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetEmployersAsync()
        {
            return Ok(await _context.Employees.ToListAsync());
        }
    }
}