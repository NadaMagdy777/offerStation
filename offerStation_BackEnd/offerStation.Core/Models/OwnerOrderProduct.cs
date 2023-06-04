using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerOrderProduct
    {
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int SupplierProductId { get; set; }
        public int Quantity { get; set; }
    }
}
