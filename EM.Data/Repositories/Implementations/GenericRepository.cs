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
        private readonly EmContext _context;
        
        protected readonly DbSet<TEntity> DbSet;

        public GenericRepository(EmContext context)
        {
            _context = context;
            DbSet = _context.Set<TEntity>();
        }

        public async Task Save(TEntity entity)
        {
            await DbSet.AddAsync(entity);
            
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            TEntity entity = DbSet.Find(id);

            if (_context.Entry(entity).State == EntityState.Detached)
            {
                DbSet.Attach(entity);
            }

            await Task.Run(() => DbSet.Remove(entity));

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await DbSet.ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await DbSet.FindAsync(id);
        }

        public async Task Update(TEntity entity)
        {
            await Task.Run(() => DbSet.Attach(entity));
            
            _context.Entry(entity).State = EntityState.Modified;
            
            await _context.SaveChangesAsync();
        }
    }
}