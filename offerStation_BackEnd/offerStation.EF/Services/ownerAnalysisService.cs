using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using offerStation.Core.Models;
using System.Linq.Expressions;

namespace offerStation.EF.Services
{
    public class ownerAnalysisService:IownerAnalysisService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHelperService _helperService;
        public ownerAnalysisService(IMapper mapper, IUnitOfWork unitOfWork, IHelperService helperService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _helperService = helperService;
        }


       
        public async Task<List<TopOrderDto>> getTop5OwnerOffer(int OwnerId)
        {
            
           List<OwnerOffer> offers=(List<OwnerOffer>)  await  _unitOfWork.OwnerOffers.FindAllAsync(O=>O.OwnerId== OwnerId &&O.IsDeleted==false );

            List<TopOrderDto> orders = new List<TopOrderDto>();
           offers= offers.OrderByDescending(o=>o.Orders.Count()).Take(5).ToList();
            offers.ForEach(o =>
            {
                TopOrderDto orderDto = new TopOrderDto();
                orderDto.Count = o.Orders.Count();
                orderDto.Name = o.Name;
                orders.Add(orderDto);
            });
            return orders;


        }
        public async Task<List<TopOrderDto>> getTop5OwnerProduct(int OwnerId)
        {

            List<OwnerProduct> products = (List<OwnerProduct>)await _unitOfWork.OwnerProducts.FindAllAsync(P => P.OwnerId == OwnerId && P.IsDeleted == false);

            List<TopOrderDto> orders = new List<TopOrderDto>();
            products = products.OrderByDescending(o => o.orders.Count()).Take(5).ToList();
            products.ForEach(o =>
            {
                TopOrderDto orderDto = new TopOrderDto();
                orderDto.Count = o.orders.Count();
                orderDto.Name = o.Name;
                orders.Add(orderDto);
            });
            return orders;

        }
        public async Task<int> getOwnerTotalCustomer(int OwnerId)
        {
            List<CustomerOrder> orders= (List<CustomerOrder>) await _unitOfWork.CustomerOrders.FindAllAsync(o=>o.OwnerId == OwnerId);
            return orders.Select(o => o.CustomerId).Distinct().Count();
        }

        public async Task<int> getOwnerTotalOrders(int ownerId)
        {   
            List<CustomerOrder> orders = (List<CustomerOrder>)await _unitOfWork.CustomerOrders.FindAllAsync(o => o.OwnerId == ownerId);
            return orders.Count();
        }

        public async  Task<double> getTotalProfit(int ownerId)
        {
            List<CustomerOrder> orders = (List<CustomerOrder>)await _unitOfWork.CustomerOrders.FindAllAsync(o => o.OwnerId == ownerId);
            return orders.Select(o => o.Total).Sum();
        }

        public async Task<int> getProductsCount(int ownerId)
        {
            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == ownerId, new List<Expression<Func<Owner, object>>>()
               {
                  o=>o.OwnerProducts            
            });


            return owner.OwnerProducts.Count();
        }

        public async Task<int> getOffersCount(int ownerId)
        {
            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == ownerId, new List<Expression<Func<Owner, object>>>()
               {
                  o=>o.Offers
            });


            return owner.Offers.Count();
        }


        public async Task overallRating()
        {

        }
       


    }
}
