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
                .ForMember(des => des.DiscountPrice, a => a.MapFrom(src =>  (src.Price - ((src.Price * src.Discount)/100))))
                .ReverseMap();

            CreateMap<Owner, OwnerDto>()
                .ForMember(des => des.Name, a => a.MapFrom(src => src.AppUser.Name))
                .ForMember(des => des.Addresses, a => a.MapFrom(src => src.AppUser.Addresses))
                .ReverseMap();

            CreateMap<ProductDto, OwnerProduct>()
                .ForMember(des => des.CreatedTime, a => a.MapFrom(src => DateTime.Now))
                .ReverseMap();

            CreateMap<OwnerReview, ReviewDto>()
                .ForMember(des => des.PersonName, a => a.MapFrom(src => src.Owner.AppUser.Name))
                .ReverseMap();

            CreateMap<OfferDto, OwnerOffer>()
                .ForMember(des => des.CreatedTime, a => a.MapFrom(src => DateTime.Now))
                .ReverseMap();
            
            CreateMap<OwnerOffer, OfferDetailsDto>()
                .ForMember(des => des.TraderImage, a => a.MapFrom(src => src.Owner.Image))
                .ReverseMap();

            CreateMap<OwnerReview, ReviewInfoDto>().ReverseMap();
            CreateMap<OwnerOffer, OfferInfoDto>().ReverseMap();
            CreateMap<Owner, OwnerRegestrationDto>().ReverseMap();
            CreateMap<OwnerCategory, OwnerCategoryDto>().ReverseMap();
            CreateMap<OwnerCategory, OwnerCategoryInfoDto>().ReverseMap();
        }
    }
}
