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
    public class CustomerProfile:Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerRegestrationDto>().ReverseMap();
            CreateMap<Customer, CustomerInfoDto>()
                .ForMember(des => des.FirstName, a => a.MapFrom(s => s.AppUser.FirstName))
                .ForMember(des => des.LastName, a => a.MapFrom(s => s.AppUser.LastName))
                .ForMember(des => des.PhoneNumber, a => a.MapFrom(s => s.AppUser.PhoneNumber))
                .ForMember(des => des.Addresses, a => a.MapFrom(s => s.AppUser.Addresses))
                .ReverseMap();
        }
    }
}
