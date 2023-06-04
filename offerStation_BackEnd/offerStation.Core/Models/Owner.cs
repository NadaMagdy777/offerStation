using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int OwnerCategoryId { get; set; }
        public OwnerCategory OwnerCategory { get; set; }
        public List<OwnerOffer> OwnerOffers { get; set; }
    }
}
