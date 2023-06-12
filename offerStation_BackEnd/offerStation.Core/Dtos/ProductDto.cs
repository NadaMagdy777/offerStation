using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Dtos
{
    public class ProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; } 
        public int Discount { get; set; }
        public byte[]? Image { get; set; }
        public int TraderId { get; set; }
        public int CategoryId { get; set; }
    }
}
