using System.Collections.Generic;
using System.Threading.Tasks;
using EM.Business.Interfaces;
using EM.Data.Entities;
using EM.Data.Repositories.Interfaces;

namespace EM.Business.Implementations
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IGenericRepository<Employee> _repository;
        
        public EmployeeService(IGenericRepository<Employee> repository)
        {
            _repository = repository;
        }
        
        public async Task<Employee> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task Update(Employee entity)
        {
            await _repository.Update(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task Save(Employee entity)
        {
            await _repository.Save(entity);
        }
    }
}