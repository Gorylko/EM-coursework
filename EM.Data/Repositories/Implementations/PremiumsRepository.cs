using EM.Data.Context;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;

namespace EM.Data.Repositories.Implementations
{
    public class PremiumsRepository : GenericRepository<Premium>, IPremiumsRepository
    {
        public PremiumsRepository(EmContext context) : base(context)
        {
        }
    }
}