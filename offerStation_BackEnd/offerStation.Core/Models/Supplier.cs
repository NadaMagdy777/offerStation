using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Supplier
    {
        public int Id { get; set; }
        [ForeignKey("AppUser")]
        public string AppUserId { get; set; }
        public virtual ApplicationUser? AppUser { get; set; }
        public int SupplierCategoryId { get; set; }
        public virtual SupplierCategory SupplierCategory { get; set; }
        public virtual List<SupplierOffer> Offers { get; set; }
        public virtual List<SupplierMenuCategory> MenuCategories { get; set; }
        //public virtual List<SupplierProduct> OwnerProducts { get; set; }
        public virtual List<OwnerReview> Reviews { get; set; }

    }
}
