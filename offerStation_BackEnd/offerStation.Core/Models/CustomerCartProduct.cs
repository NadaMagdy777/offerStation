using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class CustomerCartProduct
    {
        [Key]
        public int d { get; set; }
        public int CartId { get; set; }
        public int OwnerProductId { get; set; }
        public int Quantity { get; set; }
    }
}
