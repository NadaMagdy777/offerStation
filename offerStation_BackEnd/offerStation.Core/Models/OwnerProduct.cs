using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerProduct
    {
        [Key]
        public int ID { get; set; }
       
        public int OwnerId { get; set; }//forginkey owner
        public int OwnerMenuId { get; set; }//forginkey relation
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }




    }
}
