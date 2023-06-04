﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerOrderOffer
    {
        public int Id { get; set; }

        [ForeignKey("Oeder")]
        public int OrderId { get; set; }
        public virtual OwnerOrder Oeder { get; set; }

        [ForeignKey("Offer")]
        public int SupplierOffertId { get; set; }
        public virtual SupplierOffer Offer { get; set; }
        
        public int Quantity { get; set; }
    }
}
