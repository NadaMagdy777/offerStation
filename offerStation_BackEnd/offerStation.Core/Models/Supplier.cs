using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Supplier
    {
        public int SupplierCategoryId { get; set; }
        public virtual SupplierCategory SupplierCategory { get; set; }
    }
}
