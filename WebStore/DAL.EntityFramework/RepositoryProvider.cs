using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EntityFramework
{
    public class RepositoryProvider<T> : IRepositoryProvider<T> where T:Entity
    {
        private readonly DbContext _context;
        private readonly DbSet<T> _dbSet;

        public RepositoryProvider(DbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public IQueryable<T> Get(Expression<Func<T, bool>> filter = null)
        {
            IQueryable<T> query = _dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            return query;
        }

        public T Get(int id)
        {
            return _dbSet.Find(id);
        }

        public bool Add(T item)
        {
            return _dbSet.Add(item) != null;
        }

        public bool Delete(T item)
        {
            return _dbSet.Remove(item) != null;
        }

        public bool Update(T item)
        {
            bool result = _dbSet.Attach(item) != null;
            _context.Entry(item).State = EntityState.Modified;
            return result;
        }
    }
}
