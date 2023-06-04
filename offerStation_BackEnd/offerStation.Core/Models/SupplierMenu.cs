using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class SupplierMenu
    {
        [Key]
        public int Id { get; set; }
        public int SupplierId { get; set; }
        public string MenuName { get; set; }
        public string Description { get; set; }

    }   
}
