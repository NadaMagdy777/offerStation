﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class CustomerOrder
    {
        public int Id { get; set; }

        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }

        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public virtual Owner Owner { get; set; }

        public string PaymentMethod { get; set; } // enum paymnet method

        public virtual CustomerCardDetails CardDetails { get; set; }

        //public bool HasDelivary { get; set; }
        public virtual Delivery Delivery { get; set; }

        public virtual List<CustomerOrderProduct> Products { get; set; }
        public virtual List<CustomerOrderOffer> Offers { get; set; }
        public double Total { get; set; }


    }
}
