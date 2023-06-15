using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Delivery : BaseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public virtual List<OwnerOrder> OwnerOrders { get; set; }
        public virtual List<CustomerOrder> CustomerOrders { get; set; }
    }
}
