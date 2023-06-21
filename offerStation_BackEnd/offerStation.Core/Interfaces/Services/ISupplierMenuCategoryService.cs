using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface ISupplierMenuCategoryService
    {
        Task<MenuCategoryDetailsDto?> GetMenuCategoryDetails(int id);
        Task<bool> AddMenuCategory(int SupplierId, MenuCategoryDto menuCategoryDto);
        Task<bool> EditMenuCategory(int id, MenuCategoryDto menuCategoryDto);
        Task<bool> DeleteMenuCategory(int id);
    }
}
