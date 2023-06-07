﻿using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class AddressService: IAdressService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public AddressService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }
        public async Task<List<CityDto>> GetAllCities()
        {
            List<City> cities = (List<City>)await _unitOfWork.Cities.FindAllAsync(c=>c.IsDeleted==false);
            List<CityDto> citiesDto=_mapper.Map< List<CityDto>>(cities);
            return citiesDto;
        }
    }
}
