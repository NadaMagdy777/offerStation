using AutoMapper;
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
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHelperService _helperService;

        public CustomerService(IMapper mapper, IUnitOfWork unitOfWork, IHelperService helperService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _helperService = helperService;
        }

        public async Task<CustomerInfoDto?> GetCustomer(int id)
        {
            CustomerInfoDto customerInfoDto = null;

            Customer? customer = await _unitOfWork.Customers.FindAsync(c => c.Id == id,
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.AppUser,
                }); 

            if (customer is not null)
            {
                customerInfoDto = new CustomerInfoDto();
                customerInfoDto = _mapper.Map<CustomerInfoDto>(customer);
            }
            return customerInfoDto;
        }
        public async Task<bool> EditCustomer(int id, CustomerInfoDto customerInfoDto)
        {
            Customer customer = await _unitOfWork.Customers.FindAsync(c => c.Id == id, 
                new List<Expression<Func<Customer, object>>>()
                {
                    c => c.AppUser
                });

            if (customer.IsDeleted is false)
            {
                customer.AppUser.Name = customerInfoDto.Name;
                customer.AppUser.Email = customerInfoDto.Email;
                customer.AppUser.PhoneNumber = customerInfoDto.PhoneNumber;

                _unitOfWork.Customers.Update(customer);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        
    }
}
