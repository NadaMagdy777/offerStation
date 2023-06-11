using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.MappingProfiles
{
    public class OwnerProfile : Profile
    {
        public OwnerProfile()
        {
            CreateMap<Owner, PublicInfoDto>()
                .ForMember(des => des.Name, a => a.MapFrom(src => src.AppUser.Name))
                .ForMember(des => des.Email, a => a.MapFrom(src => src.AppUser.Email))
                .ForMember(des => des.PhoneNumber, a => a.MapFrom(src => src.AppUser.PhoneNumber))
                .ReverseMap();

            CreateMap<OwnerProduct, ProductInfoDto>()
                .ForMember(des => des.Price, a => a.MapFrom(src => src.Price))
                .ForMember(des => des.Description, a => a.MapFrom(src => src.Description))
                .ForMember(des => des.Name, a => a.MapFrom(src => src.Name))
                .ForMember(des => des.Id, a => a.MapFrom(src => src.Id))
                .ForMember(des => des.Image, a => a.MapFrom(src => src.Image))
                .ForMember(des => des.Discount, a => a.MapFrom(src => src.Discount))
                .ReverseMap();

            CreateMap<Owner, OwnerDto>()
                .ForMember(des => des.Name, a => a.MapFrom(src => src.AppUser.Name))
                .ForMember(des => des.Addresses, a => a.MapFrom(src => src.AppUser.Addresses))
                .ReverseMap();

            CreateMap<ProductDto, OwnerProduct>()
                .ForMember(des => des.OwnerId, a => a.MapFrom(src => src.TraderId))
                .ForMember(des => des.CreatedTime, a => a.MapFrom(src => DateTime.Now))
                .ReverseMap();

            CreateMap<OwnerOffer, OwnerOfferDto>().ReverseMap();
            CreateMap<Owner, OwnerRegestrationDto>().ReverseMap();
            CreateMap<OwnerCategory, OwnerCategoryDto>().ReverseMap();
            CreateMap<OwnerCategory, OwnerCategoryInfoDto>().ReverseMap();
        }
    }
}
