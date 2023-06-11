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
        public async Task<bool> AddProduct(int supplierId, ProductDto productDto)
        {
            if (productDto is not null)
            {
                SupplierProduct product = new SupplierProduct();
                product = _mapper.Map<SupplierProduct>(productDto);

                _unitOfWork.SupplierProducts.Add(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> EditProduct(int id, ProductDto productDto)
        {
            SupplierProduct product = await _unitOfWork.SupplierProducts.FindAsync(p => p.Id == id);

            if (product is not null && productDto is not null)
            {
                product.Name = productDto.Name;
                product.Price = productDto.Price;
                product.Image = productDto.Image;
                product.Discount = productDto.Discount;
                product.SupplierId = productDto.TraderId;
                product.CategoryId = productDto.CategoryId;
                product.Description = productDto.Description;

                _unitOfWork.SupplierProducts.Update(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            SupplierProduct product = await _unitOfWork.SupplierProducts.FindAsync(p => p.Id == id);

            if (product is not null)
            {
                _unitOfWork.SupplierProducts.Delete(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<List<ProductInfoDto>?> GetAllProducts(int supplierId)
        {
            List<ProductInfoDto> products = null;

            IEnumerable<SupplierProduct> supplierProducts = await _unitOfWork.SupplierProducts
                .FindAllAsync(p => p.SupplierId == supplierId && !p.IsDeleted);

            if(supplierProducts is not null)
            {
                products = _mapper.Map<List<ProductInfoDto>>(supplierProducts);
            }

            return products;
        }
        public async Task<List<SupplierCategory>> GetAllCategories()
        {
            List<SupplierCategory> supplierCategories = (List<SupplierCategory>) _unitOfWork.SupplierCategories.GetAll();
            List<SupplierCategory> supplierCategoriesDto = _mapper.Map<List<SupplierCategory>>(supplierCategories);
            return supplierCategoriesDto;
        }
    }
}
