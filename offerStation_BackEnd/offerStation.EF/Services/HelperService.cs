using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class HelperService : IHelperService
    {
        public async Task<List<Address>> GetAddresses(List<AddressDTO> addressesDto, string userId)
        {
            List<Address> addresses = new List<Address>();

            foreach (var address in addressesDto)
            {
                addresses.Add(new Address
                {
                    CityId = address.CityId,
                    details = address.details,
                    UserId = userId
                });
            }

            return addresses;
        }
    }
}
