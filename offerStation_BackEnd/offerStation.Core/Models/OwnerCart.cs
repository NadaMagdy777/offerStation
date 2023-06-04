using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerCart
    {
        [Key]
        public int Id { get; set; }
       
        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        public int SupplierId { get; set; }
        public virtual Supplier Supplier { get; set; }
        public virtual List<OwnerCartProduct> Products { get; set; }
        public virtual List<OwnerCartOffer> offers { get; set; }

    }
}
