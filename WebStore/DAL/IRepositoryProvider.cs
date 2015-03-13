using DAL.Entities;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace DAL
{
    public interface IRepositoryProvider<Item> where Item : Entity
    {
        IQueryable<Item> Get(Expression<Func<Item, bool>> filter = null);

        Item Get(int id);

        bool Add(Item item);

        bool Delete(Item item);

        bool Update(Item item);
    }
}
