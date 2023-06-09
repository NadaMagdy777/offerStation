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
    public class SupplierService : ISupplierService
    {
        private IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        public SupplierService(IUnitOfWork unitOfWork, IMapper mapper) {
           _unitOfWork = unitOfWork;
           _mapper = mapper;
        }
        public async Task<List<SupplierCategory>> GetAllCategories()
        {
            List<SupplierCategory> supplierCategories = (List<SupplierCategory>) _unitOfWork.SupplierCategories.GetAll();
            List<SupplierCategory> supplierCategoriesDto = _mapper.Map<List<SupplierCategory>>(supplierCategories);
            return supplierCategoriesDto;
        }
    }
}
