using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double Price { get; set; }
        public string Description { get; set; }
        public int Discount { get; set; }
        //[ForeignKey("Supplier")]
        //public int SupplierId { get; set; }
        //public virtual Supplier Supplier { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public virtual SupplierMenuCategory Category { get; set; }
        public virtual List<SupplierOfferProduct> Offers { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
