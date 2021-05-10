using EM.Data.Entities;
using EM.Data.Repositories.Implementations;

namespace EM.Web.Controllers
{
    public class PremiumsController : BaseEntityController<Premium>
    {
        public PremiumsController(GenericRepository<Premium> repository) : base(repository)
        {
        }
    }
}