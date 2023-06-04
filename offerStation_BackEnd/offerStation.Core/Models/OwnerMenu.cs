using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerMenu
    {
        public int ID { get; set; }

        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        public string MenuName { get; set; }
        public string Description { get; set; }

        public virtual List<OwnerProduct> OwnerProducts { get; set; }


    }
}
