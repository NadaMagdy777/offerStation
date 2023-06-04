using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerOrder
    {
        [Key]
        public int OrderId { get; set; }
        public int OwnerId { get; set; }
        public int SupplierId { get; set; }
        public string PaymentMethod { get; set; }
        public int OwnerReviewId { get; set; }
    }
}
