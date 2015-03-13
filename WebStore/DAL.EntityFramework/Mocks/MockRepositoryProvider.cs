using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EntityFramework.Mocks
{
    public class MockRepositoryProvider: IRepositoryProvider<Product>
    {
        private List<Product> _products = new List<Product>();

        public MockRepositoryProvider()
        {
            Initialize();
        }


        public IQueryable<Product> Get(System.Linq.Expressions.Expression<Func<Product, bool>> filter = null)
        {
            return _products.AsQueryable();
        }

        public Product Get(int id)
        {
            return _products.Where(item => item.Id == id).FirstOrDefault();
        }

        public bool Add(Product item)
        {
            if (_products.Find(p => p.Id == item.Id) != null)
                return false;

            _products.Add(item);
            return true;
        }

        public bool Delete(Product item)
        {
            return _products.Remove(item);
        }

        public bool Update(Product item)
        {
            Product searchProduct = _products.Find(p => p.Id == item.Id);

            if (searchProduct != null)
            {
                UpdateProduct(searchProduct, item);
                return true;
            }

            return false;
        }


        #region Initialization

        private void Initialize()
        {
            _products.Add(new Product() { Id = 1, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 80 });
            _products.Add(new Product() { Id = 2, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 60 });
            _products.Add(new Product() { Id = 3, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 70 });
            _products.Add(new Product() { Id = 4, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 80 });
            _products.Add(new Product() { Id = 5, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 90 });
            _products.Add(new Product() { Id = 6, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 100 });
            _products.Add(new Product() { Id = 7, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 180 });
            _products.Add(new Product() { Id = 8, Available = true, Description = "Some nice black T-shirt", ImageAddress = "", Name = "Black T-shirt", Price = 220 });
        }

        private void UpdateProduct(Product oldProduct, Product newProduct)
        {
            oldProduct.ImageAddress = newProduct.ImageAddress;
            oldProduct.Name = newProduct.Name;
            oldProduct.Description = newProduct.Description;
            oldProduct.Available = newProduct.Available;
            oldProduct.Price = newProduct.Price;
        }

        #endregion
    }
}
