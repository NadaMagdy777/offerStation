using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierOfferProduct
    {
        public  int ID { get; set; }

        [ForeignKey("suppliermenu")]
        public int SupplierMenuID { get; set; }
        public virtual SupplierMenu suppliermenu { get; set; }
    
        [ForeignKey("supplieroffer")]
        public int SupplierOfferID { get; set; }
        public virtual SupplierOffer supplieroffer { get; set; }
       

    }
}
