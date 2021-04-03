using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EM.Data.Context;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;
using EM.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace EM.Data.Repositories.Implementations
{
    public class EmployeeRepository : GenericRepository<Employee>, IEmployeesRepository
    {
        public EmployeeRepository(EmContext context) : base(context)
        {
        }

        public async Task<SearchResultModel<Employee>> GetSearchedEmployees(SearchModel model)
        {
            return new SearchResultModel<Employee>()
            {
                Collection = await this.DbSet
                    .Skip(model.PageIndex * model.PageSize)
                    .Take(model.PageSize)
                    .ToListAsync(),
                Count = this.DbSet.Count(),
            };
        }
    }
}