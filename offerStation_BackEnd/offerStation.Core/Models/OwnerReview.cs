using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerReview
    {
        public int ID { get; set; }
       
        public int Rating { get; set; }
        public string Comment { get; set; }

        [ForeignKey("Owner")]
        public int OwnerId { get; set; }
        public  Owner Owner { get; set; }

        [ForeignKey("OwnerOrder")]
        public int OrderId { get; set; }
        public  OwnerOrder OwnerOrder { get; set; }
    }
}
