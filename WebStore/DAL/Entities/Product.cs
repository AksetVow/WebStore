using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Product : Entity
    {
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string ImageAddress { get; set; }
        public bool Available { get; set; }
        public string Description { get; set; }
    }
}
