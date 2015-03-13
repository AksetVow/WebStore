using DAL;
using DAL.Entities;
using Microsoft.Data.OData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepositoryProvider<Product> _repository;

        public ProductController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _repository = _unitOfWork.GetRepositoryProvider<Product>();
        }

        [Route("Products")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        public PageResult<Product> Products(ODataQueryOptions<Product> queryOptions)
        {
            IEnumerable<Product> products;
            long count = -1;

            try
            {
                var queryableProducts = _repository.Get();
                products = queryOptions.ApplyTo(queryableProducts) as IEnumerable<Product>;
                count = queryableProducts.Count();
                
            }
            catch (ODataException)
            { 
                //add logging
                products = new List<Product>();
                count = 0;
            }

            var result = new PageResult<Product>(products, null, count);
            return result;
        }

        //add api for deleting , updating, removing products with admin/moderator permission


    }
}
