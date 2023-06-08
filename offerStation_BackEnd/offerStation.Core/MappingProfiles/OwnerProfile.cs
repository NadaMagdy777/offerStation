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
    public class OwnerProfile:Profile
    {
        public OwnerProfile()
        {
            
        CreateMap<Owner, OwnerRegestrationDto>().ReverseMap();
        CreateMap<OwnerOffer, OwnerOfferDto>().ReverseMap();
        CreateMap<OwnerCategory, OwnerCategoryDto>().ReverseMap();

        }
    }
}
