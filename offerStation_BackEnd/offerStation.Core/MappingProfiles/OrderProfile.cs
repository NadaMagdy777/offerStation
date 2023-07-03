using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Models;
using OrderStation.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.MappingProfiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<OwnerOrder, OrderDto>()
                .ForMember(des => des.TraderId, a => a.MapFrom(src => src.SupplierId))
                .ReverseMap();

            CreateMap<OwnerOrderProduct, OrderProductDto>()
                .ForMember(des => des.TraderProductId, a => a.MapFrom(src => src.SupplierProductId))
                .ReverseMap();
            
            CreateMap<OwnerOrderOffer, OrderOfferDto>()
                .ForMember(des => des.TraderOfferId, a => a.MapFrom(src => src.SupplierOffertId))
                .ReverseMap();

            CreateMap<CustomerOrder, OrderDto>()
                .ForMember(des => des.TraderId, a => a.MapFrom(src => src.OwnerId))
                .ReverseMap();

            CreateMap<CustomerOrderProduct, OrderProductDto>()
                .ForMember(des => des.TraderProductId, a => a.MapFrom(src => src.OwnerProductId))
                .ReverseMap();

            CreateMap<CustomerOrderOffer, OrderOfferDto>()
                .ForMember(des => des.TraderOfferId, a => a.MapFrom(src => src.OwnerOffertId))
                .ReverseMap();
        }
    }
}
