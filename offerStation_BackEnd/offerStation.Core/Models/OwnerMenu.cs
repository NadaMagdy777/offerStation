using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    internal class OwnerMenu
    {
        public int ID { get; set; }
        public int OwnerID { get; set; }
        public string MenuName { get; set; }
        public string Description { get; set; }

        public virtual List<OwnerProduct> OwnerProducts { get; set; }



    }
}
