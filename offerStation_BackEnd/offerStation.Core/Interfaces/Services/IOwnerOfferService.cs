using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface IOwnerOfferService
    {
        Task<List<OwnerOfferDto>> GetAllOffers();
    }
}
