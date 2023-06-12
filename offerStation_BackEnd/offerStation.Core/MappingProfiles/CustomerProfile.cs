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
                .ForMember(des => des.Name, a => a.MapFrom(src => src.AppUser.Name))
                .ForMember(des => des.PhoneNumber, a => a.MapFrom(src => src.AppUser.PhoneNumber))
                .ForMember(des => des.Email, a => a.MapFrom(src => src.AppUser.Email))
                .ReverseMap();

            CreateMap<CustomerReview, ReviewInfoDto>()
                //.ForMember(des => des.PersonName, a => a.MapFrom(src => src.Customer.AppUser.Name))
                .ReverseMap();
            
            CreateMap<CustomerReview, ReviewDto>()
                .ForMember(des => des.PersonName, a => a.MapFrom(src => src.Customer.AppUser.Name))
                .ReverseMap();
        }
    }
}
