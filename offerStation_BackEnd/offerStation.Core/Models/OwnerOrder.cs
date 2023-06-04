using offerStation.Core.Constants;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerOrder
    {
        public int Id { get; set; }

        [ForeignKey("Supplier")]
        public int SupplierId { get; set; }
        public virtual Supplier Supplier { get; set; }

        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        
        public string PaymentMethod { get; set; } //=> Enum of PaymentMethod
        public string CreditCarNumber { get; set; }

        public virtual List<OwnerOrderProduct> Products { get; set; }
        public virtual List<OwnerOrderOffer> Offers { get; set; }
        public virtual OwnerReview OwnerReview { get; set; }
        public double Total { get; set; }
        public int SupplierId { get; set; }
        public string PaymentMethod { get; set; }
        public int OwnerReviewId { get; set; }

        [ForeignKey("Delivery")]
        public int DeliveryId { get; set; }
        public Delivery Delivery { get; set; }

    }
}
