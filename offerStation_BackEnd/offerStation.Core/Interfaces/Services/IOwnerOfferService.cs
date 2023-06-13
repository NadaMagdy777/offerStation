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
        Task<OfferDetailsDto?> GetOfferDetails(int id);
        Task<bool> AddOffer(int ownerId, OfferInfoDto offerDto);
        Task<bool> EditOffer(int id, OfferInfoDto offerDto);
        Task<bool> DeleteOffer(int id);
    }
}
