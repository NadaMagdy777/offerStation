using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [ForeignKey("AppUser")]
        public string AppUserId { get; set; }
        public virtual ApplicationUser? AppUser { get; set; }
        public virtual Customer CustomerCart { get; set; }
        public virtual List<CustomerOrder> CustomerOrders { get; set; }
        public virtual List<CustomerReview> Reviews { get; set; }
    }
}
