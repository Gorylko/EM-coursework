using EM.Data.Context;
using EM.Data.Entities;

namespace EM.Data.Repositories.Implementations
{
    public class EmployeeRepository : GenericRepository<Employee>
    {
        public EmployeeRepository(EmContext context) : base(context)
        {
        }
    }
}