using System.Collections.Generic;
using System.Threading.Tasks;

namespace EM.Data.Repositories.Interfaces
{
    public interface IGenericRepository<TEntity>
    {
        Task Save(TEntity entity);

        Task Delete(int id);

        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity> GetById(int id);

        Task Update(TEntity entity);
    }
}