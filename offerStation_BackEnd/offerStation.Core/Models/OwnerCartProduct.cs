using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerCartProduct
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Cart")]
        public int CartId { get; set; }
        public OwnerCart Cart { get; set; }
        public int SupplierProductId { get; set; }///??
        public int Quantity { get; set; }
        // Other properties and relationships

    }
}
