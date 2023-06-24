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
        Task<List<SupplierDto>?> GetAllSuppliers();
        Task<List<SupplierDto>?> GetWaitingSuppliers();
        Task<List<SupplierDto>?> GetSuspendedSuppliers();
        Task<bool> EditSupplier(int id, PublicInfoDto supplierInfo);
        Task<bool> PermanentDeleteSupplier(int id);
        Task<bool> SuspendSupplier(int id);
        Task<bool> RemoveSupplierSuspension(int id);
        Task<bool> ApproveSupplier(int id);
        Task<ProductInfoDto?> GetProductDetails(int id);
        Task<SupplierInfoDto?> GetSupplierInfo(int id);
        Task<List<ReviewDto>?> GetAllOwnerReviewsBySupplierId(int supplierId);
        Task<List<SupplierMenuCategoriesNameDTO>> GetMenuCategoiesBySupplierId(int id);
        Task<bool> AddProduct(int supplierId, ProductDto productDto);
        Task<bool> EditProduct(int id, ProductDto productDto);
        Task<bool> DeleteProduct(int id);
        Task<bool> AddCategory(SupplierCategoryInfoDto categoryDto);
        Task<bool> EditCategory(int id, SupplierCategoryInfoDto categoryDto);
        Task<bool> DeleteCategory(int id);
        Task<List<ReviewDto>?> GetAllOwnersReviewsBySupplierId(int supplierId);
        Task<List<ProductInfoDto>?> GetAllProducts(int supplierId);
        Task<List<SupplierCategory>> GetAllCategories();
        Task<ResultrDto<OfferDto>> GetAllOffersWithPagination(int PageNumber, int pageSize, int cityId, String SortBy, string Category);
        Task<ResultrDto<SupplierDto>> getSupplierByCategory(int PageNumber, int pageSize, int cityId, string name, String SortBy, string Category);
        Task<List<OfferDto>> GetAllOffersWithoutPagination(string CategoryName, string sortBy);
    }

    public interface IsupplierAnalysisService
    {
        Task<List<AnalysisResult>> getTop5Product(int supplierId);
        Task<List<AnalysisResult>> getTop5Offer(int supplierId);
        Task<int> getTotalCustomer(int supplierId);
        Task<int> getTotalOrders(int supplierId);
        Task<double> getTotalProfit(int supplierId);
        Task<int> getOffersCount(int supplierId);
        Task<int> getProductsCount(int supplierId);
        Task<List<AnalysisResult>> getDiffernentOrdersStatus(int supplierId);
        Task<List<AnalysisResult>> getOrdersOffersProductCount(int supplierId);
        Task<List<customerInfoAnalysis>> getTopCustomerInfo(int supplierId);
    }
    public interface ISupplierOfferService
    {
        Task<OfferDetailsDto?> GetOfferDetails(int id);
        Task<List<OfferDetailsDto>?> GetAllOffersBySupplierId(int supplierId);
        Task<bool> AddOffer(int supplierId, OfferInfoDto offerDto);
        Task<bool> EditOffer(int id, OfferInfoDto offerDto);
        Task<bool> DeleteOffer(int id);
    }
    public interface ISupplierMenuCategoryService
    {
        Task<MenuCategoryDetailsDto?> GetMenuCategoryDetails(int id);
        Task<bool> AddMenuCategory(int SupplierId, MenuCategoryDto menuCategoryDto);
        Task<bool> EditMenuCategory(int id, MenuCategoryDto menuCategoryDto);
        Task<bool> DeleteMenuCategory(int id);
    }
}
