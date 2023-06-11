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
        Task<bool> DeleteProduct(int id);
        Task<bool> EditProduct(int id, ProductDto productDto);
        Task<bool> AddProduct(int supplierId, ProductDto productDto);
        Task<List<ProductInfoDto>?> GetAllProducts(int supplierId);
        Task<List<SupplierCategory>> GetAllCategories();
    }
}
