﻿using offerStation.Core.Dtos;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface IHelperService
    {
        Task<List<Address>> GetAddresses(List<AddressDTO> addressesDto, string userId);
    }
}