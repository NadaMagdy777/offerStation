using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Services
{
    public class OwnerService: IOwnerService
    {
        private IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        public OwnerService(IUnitOfWork unitOfWork, IMapper mapper) {
           this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }
        public async Task<>
        public async Task<List<OwnerCategoryDto>> GetAllCategories()

        {
            List<OwnerCategory> ownerCategories = (List<OwnerCategory>) _unitOfWork.OwnerCategories.GetAll();
            List<OwnerCategoryDto> ownerCategoriesDto = _mapper.Map<List<OwnerCategoryDto>>(ownerCategories);
            return ownerCategoriesDto;
        }
    }
}
