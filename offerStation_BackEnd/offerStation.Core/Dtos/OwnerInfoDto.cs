using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Dtos
{
    public class OwnerInfoDto
    {
        public string Name { get; set; }
        public byte[]? Image { get; set; }
        public string PhoneNumber { get; set; }
        public int Rating { get; set; }
      

    }
}
