using offerStation.Core.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace offerStation.Core.Dtos
{
    public class CustomerCartProductDto
    {

        public int OwnerProductId { get; set; }
        public string OwnerProductName { get; set; }

        public int Quantity { get; set; }
        public double Total { get; set; }
    }
}