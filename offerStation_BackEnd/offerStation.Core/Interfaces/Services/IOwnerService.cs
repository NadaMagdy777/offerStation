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
         Task<List<OwnerCategoryDto>> GetAllCategories();
        Task<OffersfilteResultrDto> GetAllOffers(int PageNumber, int pageSize, int cityId, String SortBy,string Category);
    }
}
