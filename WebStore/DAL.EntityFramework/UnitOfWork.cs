using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EntityFramework
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly DbContext _dbcontext;
        
        public UnitOfWork(DbContext dbContext)
        {
            _dbcontext = dbContext;
        }

        public void Dispose()
        {
            _dbcontext.Dispose();
        }

        public IRepositoryProvider<T> GetRepositoryProvider<T>() where T : Entities.Entity
        {
            return new RepositoryProvider<T>(_dbcontext);
        }

        public void Commit()
        {
            _dbcontext.SaveChanges();
        }
    }
}
