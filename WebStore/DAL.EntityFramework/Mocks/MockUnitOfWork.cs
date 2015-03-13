using DAL.Entities;
using System;

namespace DAL.EntityFramework.Mocks
{
    public class MockUnitOfWork: IUnitOfWork
    {
        public IRepositoryProvider<T> GetRepositoryProvider<T>() where T : Entities.Entity
        {
            if (typeof(Product) == typeof(T))
            {
                return new MockRepositoryProvider() as IRepositoryProvider<T>;
            }

            else throw new NotImplementedException();
        }

        public void Commit()
        {
            //do nothing
        }
    }
}
