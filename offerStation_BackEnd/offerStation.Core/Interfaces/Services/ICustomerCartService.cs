using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface ICustomerCartService
    {
        Task<ApiResponse> AddProductToCart(int useridentifier, ProductDetailsDto ProductId);
        Task<ApiResponse> GetCartDetails();
        Task<ApiResponse> AddOfferToCart(int id);
        Task<ApiResponse> RemoveProductFromCart(int id);
        Task<ApiResponse> RemoveOfferFromCart(int id);
    }
}
