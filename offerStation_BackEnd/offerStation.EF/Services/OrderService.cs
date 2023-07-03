using AutoMapper;
using offerStation.Core.Constants;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using OrderStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class OrderService : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public OrderService(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> ChangeOwnerOrderStatus(int id, OrderStatus status)
        {
            var order = await _unitOfWork.OwnerOrders.GetByIdAsync(id);
            if (order is not null)
            {
                order.orderStatus = status;

                _unitOfWork.OwnerOrders.Update(order);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> ChangeCustomerOrderStatus(int id, OrderStatus status)
        {
            var order = await _unitOfWork.CustomerOrders.GetByIdAsync(id);
            if (order is not null)
            {
                order.orderStatus = status;

                _unitOfWork.CustomerOrders.Update(order);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<List<OrderDto>?> GetAllOwnerOrders(int ownerId)
        {
            List<OrderDto> ordersList = null;

            var orders = await _unitOfWork.OwnerOrders
                .FindAllAsync(o => o.OwnerId == ownerId && o.orderStatus != OrderStatus.delivered,
                new List<Expression<Func<OwnerOrder, object>>>()
                {
                    o => o.Products,
                    o => o.Offers,
                });

            if(orders is not null)
            {
                ordersList = _mapper.Map<List<OrderDto>>(orders);
            }
            return ordersList;
        }
        public async Task<List<OrderDto>?> GetAllCustomerOrders(int customerId)
        {
            List<OrderDto> ordersList = null;

            var orders = await _unitOfWork.CustomerOrders
                .FindAllAsync(o => o.CustomerId == customerId && o.orderStatus != OrderStatus.delivered,
                new List<Expression<Func<CustomerOrder, object>>>()
                {
                    o => o.Products,
                    o => o.Offers,
                });

            if (orders is not null)
            {
                ordersList = _mapper.Map<List<OrderDto>>(orders);
            }
            return ordersList;
        }
        public async Task<List<OrderDto>?> GetOwnerOrdersRequested(int ownerId)
        {
            List<OrderDto> ordersList = null;

            var orders = await _unitOfWork.CustomerOrders
                .FindAllAsync(o => o.OwnerId == ownerId && o.orderStatus == OrderStatus.ordered,
                new List<Expression<Func<CustomerOrder, object>>>()
                {
                    o => o.Products,
                    o => o.Offers,
                });

            if (orders is not null)
            {
                ordersList = _mapper.Map<List<OrderDto>>(orders);
            }
            return ordersList;
        }
        public async Task<List<OrderDto>?> GetSupplierOrdersRequested(int supplierId)
        {
            List<OrderDto> ordersList = null;

            var orders = await _unitOfWork.OwnerOrders
                .FindAllAsync(o => o.SupplierId == supplierId && o.orderStatus == OrderStatus.ordered,
                new List<Expression<Func<OwnerOrder, object>>>()
                {
                    o => o.Products,
                    o => o.Offers,
                });

            if (orders is not null)
            {
                ordersList = _mapper.Map<List<OrderDto>>(orders);
            }
            return ordersList;
        }
    }
}
