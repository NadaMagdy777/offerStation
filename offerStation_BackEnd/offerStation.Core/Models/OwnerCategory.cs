using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class OwnerCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Owner> Owners { get; set; }
    }
}
