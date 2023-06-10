﻿using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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
        public async Task<List<AddressCityNameDto>?> GetAllAddresses(string id)
        {
            List<AddressCityNameDto> addressesDto = null;

            IEnumerable<Address> addresses = await _unitOfWork.Addresses.FindAllAsync(a => a.UserId == id && a.IsDeleted == false,
                new List<Expression<Func<Address, object>>>()
                {
                    a => a.City,
                });

            if(addresses is not null)
            {
                addressesDto = new List<AddressCityNameDto>();
                addressesDto = _mapper.Map<List<AddressCityNameDto>>(addresses);
                
                return addressesDto;
            }
            return null;
        }
        public async Task<bool> EditAddress(int id, AddressDTO addressDTO)
        {
            Address address = await _unitOfWork.Addresses.GetByIdAsync(id);

            if (address is not null)
            {
                address.CityId = addressDTO.CityId;
                address.details = addressDTO.details;

                _unitOfWork.Addresses.Update(address);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> DeleteAddress(int id)
        {
            Address address = await _unitOfWork.Addresses.GetByIdAsync(id);

            if(address is not null)
            {
                _unitOfWork.Addresses.Delete(address);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<List<CityDto>> GetAllCities()
        {
            List<City> cities = (List<City>)await _unitOfWork.Cities.FindAllAsync(c=>c.IsDeleted==false);
            List<CityDto> citiesDto=_mapper.Map< List<CityDto>>(cities);
            return citiesDto;
        }
    }
}
