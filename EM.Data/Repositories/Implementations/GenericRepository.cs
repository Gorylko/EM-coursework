using System.Collections.Generic;
using System.Threading.Tasks;
using EM.Data.Context;
using EM.Data.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EM.Data.Repositories.Implementations
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
        where TEntity : class
    {
        private readonly DbSet<TEntity> _dbSet;
        private readonly EmContext _context;

        public GenericRepository(EmContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        public async Task Save(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            TEntity entity = _dbSet.Find(id);

            if (_context.Entry(entity).State == EntityState.Detached)
            {
                _dbSet.Attach(entity);
            }

            await Task.Run(() => _dbSet.Remove(entity));

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task Update(TEntity entity)
        {
            await Task.Run(() => _dbSet.Attach(entity));
            
            _context.Entry(entity).State = EntityState.Modified;
            
            await _context.SaveChangesAsync();
        }
    }
}