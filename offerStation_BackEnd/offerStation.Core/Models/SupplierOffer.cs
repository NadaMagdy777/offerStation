using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierOffer
    {
        public int ID { get; set; }
        public int SupplierID { get; set; }
        public string OfferName { get; set; }
        public string OfferDescription { get; set; }

    }
}
