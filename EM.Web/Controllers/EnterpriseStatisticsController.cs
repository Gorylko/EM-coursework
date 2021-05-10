using EM.Data.Entities;
using EM.Data.Repositories.Implementations;

namespace EM.Web.Controllers
{
    public class EnterpriseStatisticsController : BaseEntityController<EnterpriseStatistic>
    {
        public EnterpriseStatisticsController(GenericRepository<EnterpriseStatistic> repository) : base(repository)
        {
        }
    }
}