using System.Collections.Generic;
using System.Threading.Tasks;

namespace EM.Business.Interfaces
{
    public interface IService<T>
    {
        Task<T> GetById(int id);

        Task<IEnumerable<T>> GetAll();

        Task Update(T entity);

        Task Delete(int id);

        Task Save(T entity);
    }
}