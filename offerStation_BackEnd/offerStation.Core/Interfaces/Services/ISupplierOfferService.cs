using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface ISupplierOfferService
    {
        Task<OfferDetailsDto?> GetOfferDetails(int id);
        Task<List<OfferDetailsDto>?> GetAllOffersBySupplierId(int supplierId);
        Task<bool> AddOffer(int supplierId, OfferInfoDto offerDto);
        Task<bool> EditOffer(int id, OfferInfoDto offerDto);
        Task<bool> DeleteOffer(int id);
    }
}
