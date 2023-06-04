using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Models
{
    public class ApplicationUser :IdentityUser
    {
        public virtual List<Address> Addresses { get; set; }
            
       public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual Admin? Admin { get; set; }
        public virtual Customer? Customer { get; set; }
        public virtual Owner? Owner{ get; set; }
        public virtual Supplier? Supplier { get; set; }

    }
}
