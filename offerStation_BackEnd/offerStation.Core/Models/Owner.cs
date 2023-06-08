using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Owner : BaseModel
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; }
        public byte[]? Image { get; set; }

        [ForeignKey("AppUser")]
        public string AppUserId { get; set; }
        public virtual ApplicationUser? AppUser { get; set; }
        public int OwnerCategoryId { get; set; }
        public virtual OwnerCategory OwnerCategory { get; set; }
        public virtual List<OwnerOffer> Offers { get; set; }
        public virtual List<OwnerMenuCategory> MenuCategories { get; set; }
        public virtual List<OwnerProduct> OwnerProducts { get; set; }
        public virtual List<OwnerReview> SuppliersReviews { get; set; }
        public virtual List<CustomerReview> CustomersReviews { get; set; }
    }
}
