using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Owner
    {
        public int OwnerCategoryId { get; set; }
        public virtual OwnerCategory OwnerCategory { get; set; }
        public List<OwnerOffer> OwnerOffers { get; set; }
        public List<OwnerReview> OwnerReviews { get; set; }
        public virtual List<OwnerProduct> OwnerProducts { get; set; }
    }
}
