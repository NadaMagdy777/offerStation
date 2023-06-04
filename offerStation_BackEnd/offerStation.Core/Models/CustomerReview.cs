using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class CustomerReview
    {
        public int ID { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }

        [ForeignKey("customer")]
        public int CustomerId { get; set; }
        public virtual Customer customer { get; set; }

        [ForeignKey ("Owner")]
        public int OwnerId { get; set; }
        public virtual  Owner Owner { get; set; } 
    }
}
