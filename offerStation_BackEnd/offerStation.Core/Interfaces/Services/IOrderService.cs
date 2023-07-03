﻿using offerStation.Core.Constants;
using OrderStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Interfaces.Services
{
    public interface IOrderService
    {
        Task<bool> ChangeOwnerOrderStatus(int id, OrderStatus status);
        Task<bool> ChangeCustomerOrderStatus(int id, OrderStatus status);
        Task<List<OrderDto>?> GetAllOwnerOrders(int customerId);
        //Task<List<OwnerOrderDto>?> GetAllCustomerOrders(int customerId);
    }
}
