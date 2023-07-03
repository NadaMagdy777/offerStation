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
            CreateMap<OwnerOrder, OrderDto>().ReverseMap();

            CreateMap<OwnerOrderProduct, OrderProductDto>()
                .ForMember(des => des.TraderProductId, a => a.MapFrom(src => src.SupplierProductId))
                .ReverseMap();
            
            CreateMap<OwnerOrderOffer, OrderOfferDto>()
                .ForMember(des => des.TraderProductId, a => a.MapFrom(src => src.SupplierOffertId))
                .ReverseMap();
        }
    }
}
