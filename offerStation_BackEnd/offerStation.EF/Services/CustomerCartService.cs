using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using offerStation.Core.Constants;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.MappingProfiles;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Mail;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF
{
    public class CustomerCartService : ICustomerCartService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        public CustomerCartService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public Task<ApiResponse> GetCartDetails()
        {
            throw new NotImplementedException();
        }

        public async Task<ApiResponse> AddProductToCart(int useridentifier, ProductDetailsDto Product)
        {
            Customer customer = await _unitOfWork.Customers 
                .FindAsync(c => c.Id == useridentifier && !c.IsDeleted, 
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.CustomerCart.Products,
                    c => c.CustomerCart.Owner.AppUser,
                });

            if(customer is null)
                return new ApiResponse(401, false);

            OwnerProduct op = await _unitOfWork.OwnerProducts.FindAsync(p => p.Id == Product.Id);
            if(customer.CustomerCart is null)
            {
                CustomerCart cart = new() { CustomerId = useridentifier , OwnerId = op.OwnerId };

                _unitOfWork.CustomerCarts.Add(cart);

                customer.CustomerCart = cart;

                _unitOfWork.Complete();
            }

            CustomerCartDto result;

            if (customer.CustomerCart.Products is null)
            {
                CustomerCartProduct customerCartProduct = new ()
                {
                    OwnerProductId = op.Id,
                    CartId = customer.CustomerCart.Id,
                    //OwnerProduct = op,
                    Quantity = 1,
                    Total = op.Price
                };
                _unitOfWork.CustomerCartProducts.Add(customerCartProduct);
                _unitOfWork.Complete();

                List<CustomerCartProduct> customerCartProductsList = new List<CustomerCartProduct>();
                customerCartProductsList.Add(customerCartProduct);

                customer.CustomerCart.Products = customerCartProductsList;

            }
            else
            {
                CustomerCartProduct ccp = customer.CustomerCart.Products.FirstOrDefault(p => p.OwnerProductId == op.Id);
                if (ccp is null)
                    customer.CustomerCart.Products.Add(new CustomerCartProduct { OwnerProductId = op.Id, OwnerProduct = op, Quantity = 1, Total = op.Price });
                else
                {
                    ccp.Quantity++;
                    ccp.Total += op.Price;
                }
            }
            _unitOfWork.Complete();

            result = _mapper.Map<CustomerCartDto>(customer.CustomerCart);

            return new ApiResponse(200, true, result, "Added Successfully");
        }

        public Task<ApiResponse> AddOfferToCart(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResponse> RemoveProductFromCart(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResponse> RemoveOfferFromCart(int id)
        {
            throw new NotImplementedException();
        }

    }
}
