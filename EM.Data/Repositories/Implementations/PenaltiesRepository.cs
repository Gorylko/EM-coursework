using EM.Data.Context;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;

namespace EM.Data.Repositories.Implementations
{
    public class PenaltiesRepository : GenericRepository<Penalty>, IPenaltiesRepository
    {
        public PenaltiesRepository(EmContext context) : base(context)
        {
        }
    }
}