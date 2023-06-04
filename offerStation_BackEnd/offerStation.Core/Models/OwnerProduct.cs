using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
       
        [ForeignKey("owner")]
        public int OwnerId { get; set; }
        public virtual Owner owner { get; set; }

        [ForeignKey("ownerMenu")]
        public int OwnerMenuId { get; set; }
        public virtual OwnerMenu ownerMenu { get; set; }


    }
}
