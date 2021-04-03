using System.Threading.Tasks;
using EM.Data.Entities;
using EM.Shared.Models;

namespace EM.Business.Interfaces
{
    public interface IEmployeeService : IService<Employee>
    {
        Task<SearchResultModel<Employee>> GetSearchedEmployees(SearchModel model);
    }
}