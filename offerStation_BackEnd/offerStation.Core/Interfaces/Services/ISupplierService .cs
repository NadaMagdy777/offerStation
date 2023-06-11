using offerStation.Core.Dtos;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface ISupplierService
    {
        Task<PublicInfoDto?> GetSupplier(int id);
        Task<bool> EditSupplier(int id, PublicInfoDto supplierInfo);
        Task<List<SupplierCategory>> GetAllCategories();
        Task<ResultrDto<SupplierOfferDto>> GetAllOffersWithPagination(int PageNumber, int pageSize, int cityId, String SortBy, string Category);
        Task<ResultrDto<SupplierDto>> getSupplierByCategory(int PageNumber, int pageSize, int cityId, string name, String SortBy, string Category);
        Task<List<SupplierOfferDto>> GetAllOffersWithoutPagination(string CategoryName, string sortBy);
    }
}
