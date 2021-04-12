using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using EM.Data.Context;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;
using EM.Shared.Models;
using Microsoft.EntityFrameworkCore;
using NinjaNye.SearchExtensions;

namespace EM.Data.Repositories.Implementations
{
    public class EmployeeRepository : GenericRepository<Employee>, IEmployeesRepository
    {
        public EmployeeRepository(EmContext context) : base(context)
        {
        }

        public async Task<SearchResultModel<Employee>> GetSearchedEmployees(SearchModel model)
        {
            var selecting = this.DbSet
                .Search(x => x.Name, x => x.Surname)
                .Containing(model.SearchValue);

            return new SearchResultModel<Employee>()
            {
                Collection = await selecting
                    .Skip(model.PageIndex * model.PageSize)
                    .Take(model.PageSize)
                    .ToListAsync(),
                Count = selecting.Count(),
            };
        }
    }
}