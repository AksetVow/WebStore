using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EntityFramework
{
    public class Context : DbContext
    {
        public Context()
            : base("WebStore")
        { 
        
        }

        public IDbSet<Product> Products { get; set; }
    }
}
