using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int OwnerCategoryId { get; set; }
        public OwnerCategory OwnerCategory { get; set; }
        public List<OwnerOffer> OwnerOffers { get; set; }
<<<<<<< HEAD
        public List<OwnerReview> OwnerReviews { get; set; }
=======
        public virtual List<OwnerProduct> OwnerProducts { get; set; }
>>>>>>> 566384148c36c6396b5e189bcdb0ef72401dfe22
    }
}
