using System.Collections.Generic;
using System.Threading.Tasks;
using EM.Business.Interfaces;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;

namespace EM.Business.Implementations
{
    public class PenaltiesService : IPenaltiesService
    {
        private readonly IPenaltiesRepository _repository;
        
        public PenaltiesService(IPenaltiesRepository repository)
        {
            _repository = repository;
        }
        
        public async Task<Penalty> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<IEnumerable<Penalty>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task Update(Penalty entity)
        {
            await _repository.Update(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task Save(Penalty entity)
        {
            await _repository.Save(entity);
        }
    }
}