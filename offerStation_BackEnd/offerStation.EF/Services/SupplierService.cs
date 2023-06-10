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
    public class SupplierService : ISupplierService
    {
        private IMapper _mapper;
        private IUnitOfWork _unitOfWork;
        private readonly IHelperService _helperService;
        public SupplierService(IMapper mapper, IUnitOfWork unitOfWork, IHelperService helperService) {
           _mapper = mapper;
           _unitOfWork = unitOfWork;
            _helperService = helperService;
        }
        public async Task<PublicInfoDto?> GetSupplier(int id)
        {
            PublicInfoDto? supplierInfo = null;

            Supplier supplier = await _unitOfWork.Suppliers.FindAsync(s => s.Id == id,
                new List<Expression<Func<Supplier, object>>>()
                {
                    s => s.AppUser,
                });


            if (supplier is not null)
            {
                supplierInfo = new PublicInfoDto();
                supplierInfo = _mapper.Map<PublicInfoDto>(supplier);
            }

            return supplierInfo;
        }
        public async Task<bool> EditSupplier(int id, PublicInfoDto supplierInfo)
        {
            Supplier supplier = await _unitOfWork.Suppliers.FindAsync(s => s.Id == id,
                new List<Expression<Func<Supplier, object>>>()
                {
                    s => s.AppUser,
                });

            if (supplier.IsDeleted is false)
            {
                supplier.Image = supplierInfo.Image;
                supplier.AppUser.Name = supplierInfo.Name;
                supplier.AppUser.Email = supplierInfo.Email;
                supplier.AppUser.PhoneNumber = supplierInfo.PhoneNumber;

                _unitOfWork.Suppliers.Update(supplier);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }

        public async Task<List<SupplierCategory>> GetAllCategories()
        {
            List<SupplierCategory> supplierCategories = (List<SupplierCategory>) _unitOfWork.SupplierCategories.GetAll();
            List<SupplierCategory> supplierCategoriesDto = _mapper.Map<List<SupplierCategory>>(supplierCategories);
            return supplierCategoriesDto;
        }
    }
}
