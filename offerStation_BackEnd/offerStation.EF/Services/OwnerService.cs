using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class OwnerService : IOwnerService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHelperService _helperService;
        public OwnerService(IMapper mapper, IUnitOfWork unitOfWork, IHelperService helperService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _helperService = helperService;
        }
        public async Task<OwnerInfoDto?> GetOwner(int id)
        {
            OwnerInfoDto? ownerInfo = null;

            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == id,
                new List<Expression<Func<Owner, object>>>()
                {
                    o => o.AppUser.Addresses,
                });


            if (owner is not null)
            {
                ownerInfo = new OwnerInfoDto();
                ownerInfo = _mapper.Map<OwnerInfoDto>(owner);
            }

            return ownerInfo;
        }
        public async Task<bool> EditOwner(int id, OwnerInfoDto ownerInfo)
        {
            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == id,
                new List<Expression<Func<Owner, object>>>()
                {
                    o => o.AppUser.Addresses,
                });

            if (owner.IsDeleted is not true) 
            {
                owner.Image = ownerInfo.Image;
                owner.AppUser.Name = ownerInfo.Name;
                owner.AppUser.Email = ownerInfo.Email;
                owner.AppUser.PhoneNumber = ownerInfo.PhoneNumber;
                owner.AppUser.Addresses = await _helperService.GetAddresses(ownerInfo.Addresses, owner.AppUserId);
                
                _unitOfWork.Owners.Update(owner);
                _unitOfWork.Complete();
                _unitOfWork.CommitChanges();

                return true;
            }
            return false;
        }
        public async Task<List<OwnerCategoryDto>> GetAllCategories()
        {
            List<OwnerCategory> ownerCategories = (List<OwnerCategory>)_unitOfWork.OwnerCategories.GetAll();
            List<OwnerCategoryDto> ownerCategoriesDto = _mapper.Map<List<OwnerCategoryDto>>(ownerCategories);
            return ownerCategoriesDto;
        }
    }
}
