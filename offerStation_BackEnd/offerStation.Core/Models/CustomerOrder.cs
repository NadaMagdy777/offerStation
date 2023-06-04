using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class CustomerOrder
    {
        [Key]
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int OwnerId { get; set; }
        public string PaymentMethod { get; set; }
    }
}
