﻿using offerStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface ICustomerService
    {
        Task<CustomerInfoDto?> GetCustomer(int id);
        Task<bool> EditCustomer(int id, CustomerInfoDto customerInfoDto);
        Task<bool> SuspendCustomer(int id);
        Task<bool> RemoveCustomerSuspension(int id);
        Task<bool> DeleteReview(int id);
        Task<List<ReviewDto>?> GetAllCustomersReviews();
    }
}
