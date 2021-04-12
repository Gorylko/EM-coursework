using System.Collections.Generic;
using System.Threading.Tasks;
using EM.Business.Interfaces;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;

namespace EM.Business.Implementations
{
    public class PremiumsService : IPremiumsService
    {
        private readonly IPremiumsRepository _repository;
        
        public PremiumsService(IPremiumsRepository repository)
        {
            _repository = repository;
        }
        
        public async Task<Premium> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<IEnumerable<Premium>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task Update(Premium entity)
        {
            await _repository.Update(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task Save(Premium entity)
        {
            await _repository.Save(entity);
        }
    }
}