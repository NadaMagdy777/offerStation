﻿using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface IOwnerService
    {
        Task<PublicInfoDto?> GetOwner(int id);
        Task<OwnerInfoDto?> GetOwnerInfo(int id);
        Task<List<OwnerDto>?> GetAllOwners();
        Task<List<OwnerDto>?> GetWaitingOwners();
        Task<List<OwnerDto>?> GetSuspendedOwners();
        Task<bool> EditOwner(int id, PublicInfoDto ownerInfo);
        Task<bool> PermanentDeleteOwner(int id);
        Task<bool> SuspendOwner(int id);
        Task<bool> RemoveOwnerSuspension(int id);
        Task<bool> ApproveOwner(int id);
        Task<bool> AddProduct(int ownerId, ProductDto productDto);
        Task<bool> EditProduct(int id, ProductDto productDto);
        Task<bool> DeleteProduct(int id);
        Task<bool> AddCategory(OwnerCategoryInfoDto categoryDto);
        Task<bool> EditCategory(int id, OwnerCategoryInfoDto categoryDto);
        Task<bool> DeleteCategory(int id);
        Task<bool> AddReview(int ownerId, int supplierId, ReviewInfoDto reviewDto);
        Task<bool> DeleteReview(int id);
        Task<List<ReviewDto>?> GetAllOwnersReviews();
        Task<List<ReviewDto>?> GetAllCustomerReviewsByOwnerId(int id);
        Task<List<OwnerCategoryDto>> GetAllCategories();
        Task<List<OwnerMenuCategoriesNameDTO>> GetMenuCategoiesByOwnerId(int id);
        Task<List<ProductInfoDto>> GetProductsByMenuCategoryID(int id);
        Task<List<ProductInfoDto>> GetAllProductsByOwmerID(int id);
        Task<ResultrDto<OwnerDto>> getOwnersByCategory(int PageNumber, int pageSize, int cityId, string name, String SortBy, string Category);
        Task<ResultrDto<OfferDto>> GetAllOffersWithPagination(int PageNumber, int pageSize, int cityId, String SortBy, string Category);
        Task<List<OfferDto>> GetAllOffersWithoutPagination(string CategoryName, string sortBy);
        Task<List<OwnerOfferProductsDto>?> GetOfferDetailsByOfferId(int id);
        Task<List<OfferDetailsDto>?> GetAllOffersByOwnerId(int id);
    }
    public interface IownerAnalysisService{
        Task<List<TopOrderDto>> getTop5OwnerProduct(int OwnerId);
        Task<List<TopOrderDto>> getTop5OwnerOffer(int OwnerId);


    }

}
