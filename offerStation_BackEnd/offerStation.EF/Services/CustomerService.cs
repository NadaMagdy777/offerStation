﻿using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CustomerService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<CustomerInfoDto?> GetCustomer(int id)
        {
            CustomerInfoDto customerInfoDto = null;

            Customer customer = await _unitOfWork.Customers.FindAsync(c => c.Id == id,
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.AppUser.Addresses
                });

            if (customer is not null)
            {
                customerInfoDto = new CustomerInfoDto();
                customerInfoDto = _mapper.Map<CustomerInfoDto>(customer);

                return customerInfoDto;
            }
            return null;
        }
        public async Task<bool> EditCustomer(CustomerInfoDto customerInfoDto, int id)
        {
            Customer customer = await _unitOfWork.Customers.FindAsync(c => c.Id == id,
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.AppUser.Addresses
                });

            if (customer is not null)
            {
                customer.AppUser.Name = customerInfoDto.Name;
                customer.AppUser.PhoneNumber = customerInfoDto.PhoneNumber;

                if(customerInfoDto.Addresses is not null)
                {

                    customer.AppUser.Addresses = await GetAddresses(customerInfoDto.Addresses, customer.AppUserId);
                }

                _unitOfWork.Customers.Update(customer);
                _unitOfWork.Complete();
                _unitOfWork.CommitChanges();

                return true;
            }
            return false;
        }
        private async Task<List<Address>> GetAddresses(List<AddressDTO> addressesDto, string userId)
        {
            List<Address> addresses = new List<Address>();

            foreach(var address in addressesDto)
            {
                addresses.Add(new Address
                {
                    CityId = address.CityId,
                    details = address.details,
                    UserId = userId
                });
            }

            return addresses;
        }
    }
}