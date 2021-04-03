using System.Threading.Tasks;
using EM.Data.Entities;
using EM.Shared.Models;

namespace EM.Data.Repositories.Interfaces
{
    public interface IEmployeesRepository : IGenericRepository<Employee>
    {
        Task<SearchResultModel<Employee>> GetSearchedEmployees(SearchModel model);
    }
}