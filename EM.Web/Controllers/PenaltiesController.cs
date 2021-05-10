using EM.Data.Entities;
using EM.Data.Repositories.Implementations;

namespace EM.Web.Controllers
{
    public class PenaltiesController : BaseEntityController<Penalty>
    {
        public PenaltiesController(GenericRepository<Penalty> repository) : base(repository)
        {
        }
    }
}