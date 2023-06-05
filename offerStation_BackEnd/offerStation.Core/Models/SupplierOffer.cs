using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierOffer
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [ForeignKey("Supplier")]
        public int SupplierID { get; set; }
        public virtual Supplier Supplier { get; set; }
        public virtual List<SupplierOfferProduct> Products { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
