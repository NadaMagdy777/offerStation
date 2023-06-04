using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerCart
    {
        [Key]
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public int SupplierId { get; set; }

        public List<OwnerCartProduct> Products { get; set; }
        // Other properties and relationships

    }
}
