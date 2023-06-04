using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    internal class SupplierOffer
    {
        public int ID { get; set; }
        public int SupplierID { get; set; } //forgin key from supplier
        public string OfferName { get; set; }
        public string OfferDescription { get; set; }

    }
}
