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

        [ForeignKey("Supplier")]
        public int SupplierID { get; set; }
        public virtual Supplier Supplier { get; set; }
        public string OfferName { get; set; }
        public string OfferDescription { get; set; }
        public virtual List<SupplierOfferProduct> Products { get; set; }    


    }
}
