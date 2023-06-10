using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Dtos
{
    public class OwnerCategoryWithOffer
    {
        public string Name { get; set; }
        public byte[]? Image { get; set; }
        List<OwnerOfferDto> offers { get; set; }
    }
}
