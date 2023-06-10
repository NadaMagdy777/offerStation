using offerStation.Core.Dtos;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface IAdressService
    {
        Task<List<CityDto>> GetAllCities();

        //Task<List<AddressDTO>> GetAddresses();
    }
}
