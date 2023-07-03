using offerStation.Core.Constants;
using offerStation.Core.Dtos;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderStation.Core.Dtos
{
    public class OrderDto
    {
        public int Id { get; set; }
        public OrderStatus orderStatus { get; set; }
        public DateTime orderDate { get; set; }
        public double Total { get; set; }
        public List<OrderProductDto> Products { get; set; }
        public List<OrderOfferDto> Offers { get; set; }
    }
    public class OwnerOrderDto : OrderDto
    {
    }
    public class CustomerOrderDto : OrderDto
    {
        //public List<OwnerOrderProduct> Products { get; set; }
        //public List<OwnerOrderOffer> Offers { get; set; }
    }
}
