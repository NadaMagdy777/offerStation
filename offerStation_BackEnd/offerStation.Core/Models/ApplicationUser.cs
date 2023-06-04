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
            
    }
}
