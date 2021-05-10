using EM.Data.Entities;
using EM.Data.Repositories.Implementations;

namespace EM.Web.Controllers
{
    public class EmployeeInfosController : BaseEntityController<EmployeeInfo>
    {
        public EmployeeInfosController(GenericRepository<EmployeeInfo> repository) : base(repository)
        {
        }
    }
}