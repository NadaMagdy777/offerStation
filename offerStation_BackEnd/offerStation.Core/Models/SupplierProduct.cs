using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierProduct
    {
        int Id { get; set; }
        public string Name { get; set; }

        [ForeignKey("SupplierMenu")]
        public int SupplierMenueId { get; set; }
        public virtual SupplierMenu SupplierMenu { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        
    }
}
