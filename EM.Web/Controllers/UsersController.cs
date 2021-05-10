using EM.Data.Entities;
using EM.Data.Repositories.Implementations;

namespace EM.Web.Controllers
{
    public class UsersController : BaseEntityController<User>
    {
        public UsersController(GenericRepository<User> repository) : base(repository)
        {
        }
    }
}