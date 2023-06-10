﻿using AutoMapper;
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
                .ForMember(des => des.Addresses, a => a.MapFrom(src => src.AppUser.Addresses))
                .ReverseMap();
        }
    }
}
