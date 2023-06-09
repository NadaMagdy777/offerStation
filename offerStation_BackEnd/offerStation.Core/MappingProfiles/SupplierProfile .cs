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
    public class SupplierProfile : Profile
    {
        public SupplierProfile()
        {
            CreateMap<Supplier, PublicInfoDto>()
                .ForMember(des => des.Name, a => a.MapFrom(src => src.AppUser.Name))
                .ForMember(des => des.Email, a => a.MapFrom(src => src.AppUser.Email))
                .ForMember(des => des.Addresses, a => a.MapFrom(src => src.AppUser.Addresses))
                .ForMember(des => des.PhoneNumber, a => a.MapFrom(src => src.AppUser.PhoneNumber))
                .ReverseMap();

            CreateMap<Supplier, SupplierRegestrationDto>().ReverseMap();
            CreateMap<SupplierCategory, SupplierCategoryDto>().ReverseMap();
        }
    }
}
