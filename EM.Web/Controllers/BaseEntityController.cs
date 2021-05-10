using System.Threading.Tasks;
using EM.Data.Repositories.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace EM.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class BaseEntityController<TEntity> : Controller where TEntity: class
    {
        private readonly GenericRepository<TEntity> _repository;

        public BaseEntityController(GenericRepository<TEntity> repository)
        {
            _repository = repository;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _repository.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _repository.GetById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Save(TEntity entity)
        {
            await _repository.Save(entity);
            
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.Delete(id);

            return Ok();
        }
        
        [HttpPut]
        public async Task<IActionResult> Update(TEntity entity)
        {
            await _repository.Update(entity);

            return Ok();
        }
    }
}