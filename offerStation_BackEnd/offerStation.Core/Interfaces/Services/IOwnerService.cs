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
        Task<bool> EditOwner(int id, PublicInfoDto ownerInfo);
        Task<List<OwnerCategoryDto>> GetAllCategories();
        Task<List<OwnerMenuCategoriesNameDTO>> GetMenuCategoiesByOwnerId(int id);
        Task<List<OwnerProductDTO>> GetProductsByMenuCategoryID(int id);
        Task<ResultrDto<OwnerOfferDto>> GetAllOffers(int PageNumber, int pageSize, int cityId, String SortBy,string Category);

        Task<ResultrDto<OwnerDto>> getOwnersByCategory(int PageNumber, int pageSize, int cityId, string name, String SortBy, string Category);

    }
}
