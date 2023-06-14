using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using offerStation.Core.Constants;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.MappingProfiles;
using offerStation.Core.Models;
using offerStation.EF.Services;
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

        public async Task<ApiResponse> AddProductToCart(int userIdentifier, ProductDetailsDto Product)
        {
            Customer customer = await _unitOfWork.Customers 
                .FindAsync(c => c.Id == userIdentifier && !c.IsDeleted, 
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.CustomerCart.Offers,
                    c => c.CustomerCart.Products,
                });

            if(customer is null)
                return new ApiResponse(401, false);

            OwnerProduct op = await _unitOfWork.OwnerProducts.FindAsync(p => p.Id == Product.Id,
                new List<Expression<Func<OwnerProduct, object>>>()
                {
                    p =>p.Owner.AppUser,
                });

            

            if(customer.CustomerCart is null)
            {
                CustomerCart cart = new() { CustomerId = userIdentifier , OwnerId = op.OwnerId };

                _unitOfWork.CustomerCarts.Add(cart);

                customer.CustomerCart = cart;

                _unitOfWork.Complete();
            }

            CustomerCartDto result;

            if (customer.CustomerCart.OwnerId != op.OwnerId)
                return new ApiResponse(200, false, null, "You Can Only Buy From One Place !");

            if (customer.CustomerCart.Products is null)
            {
                CustomerCartProduct customerCartProduct = new ()
                {
                    OwnerProductId = op.Id,
                    CartId = customer.CustomerCart.Id,
                    Quantity = 1,
                    Price = op.Price,
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
                    customer.CustomerCart.Products.Add(new CustomerCartProduct { OwnerProductId = op.Id, OwnerProduct = op, Quantity = 1, Price = op.Price,Total = op.Price });
                else
                {
                    ccp.Quantity++;
                    ccp.Total += op.Price;
                }
            }
            _unitOfWork.Complete();

            customer.CustomerCart.Total += op.Price;

            result = _mapper.Map<CustomerCartDto>(customer.CustomerCart);
            
            result.OwnerName = op.Owner.AppUser.Name;


            return new ApiResponse(200, true, result, "Added Successfully");
        }

        public async Task<ApiResponse> AddOfferToCart(int userIdentifier, ProductDetailsDto Offer)
        {
            Customer customer = await _unitOfWork.Customers
                .FindAsync(c => c.Id == userIdentifier && !c.IsDeleted,
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.CustomerCart.Offers,
                    c => c.CustomerCart.Products,
                });

            if (customer is null)
                return new ApiResponse(401, false);

            OwnerOffer of = await _unitOfWork.OwnerOffers.FindAsync(o => o.Id == Offer.Id,
                new List<Expression<Func<OwnerOffer, object>>>()
                {
                    o =>o.Owner.AppUser,
                });

            

            if (customer.CustomerCart is null)
            {
                CustomerCart cart = new() { CustomerId = userIdentifier, OwnerId = of.OwnerId };

                _unitOfWork.CustomerCarts.Add(cart);

                customer.CustomerCart = cart;

                _unitOfWork.Complete();
            }
            CustomerCartDto result;

            if (customer.CustomerCart.OwnerId != of.OwnerId)
                return new ApiResponse(200, false, null, "You Can Only Buy From One Place !");

            if (customer.CustomerCart.Offers is null)
            {
                CustomerCartOffer customerCartOffer = new()
                {
                    OwnerOffertId = of.Id,
                    CartId = customer.CustomerCart.Id,
                    Quantity = 1,
                    Price = of.Price,
                    Total = of.Price
                };
                _unitOfWork.CustomerCartOffers.Add(customerCartOffer);
                _unitOfWork.Complete();

                List<CustomerCartOffer> customerCartProductsList = new List<CustomerCartOffer>();
                customerCartProductsList.Add(customerCartOffer);

                customer.CustomerCart.Offers = customerCartProductsList;

            }
            else
            {
                CustomerCartOffer cco = customer.CustomerCart.Offers.FirstOrDefault(o => o.OwnerOffertId == of.Id);
                if (cco is null)
                    customer.CustomerCart.Offers.Add(new CustomerCartOffer { OwnerOffertId = of.Id, OwnerOffer = of, Quantity = 1,Price = of.Price,Total = of.Price });
                else
                {
                    cco.Quantity++;
                    cco.Total += of.Price;

                }
            }
            _unitOfWork.Complete();

            customer.CustomerCart.Total += of.Price;

            result = _mapper.Map<CustomerCartDto>(customer.CustomerCart);
           
            result.OwnerName = of.Owner.AppUser.Name;

            return new ApiResponse(200, true, result, "Added Successfully");
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
