using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EM.Data.Context;
using EM.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly EmContext _context;
        
        public WeatherForecastController(EmContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        private readonly ILogger<WeatherForecastController> _logger;

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _context.Employees.ToList();
        }
    }
}