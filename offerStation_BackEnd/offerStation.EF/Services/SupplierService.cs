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

       
        public async Task<List<SupplierOffer>> filterOffersByCity(int CityID, string categoryName)
        {

            List<SupplierOffer> offers;
            offers = (List<SupplierOffer>)await _unitOfWork.SupplierOffers.FindAllAsync(s => s.IsDeleted == false && s.Supplier.SupplierCategory.Name == categoryName, new List<Expression<Func<SupplierOffer, object>>>()
               {
                   o=>o.Supplier.AppUser.Addresses,
                   o=>o.Supplier.SupplierCategory
            });
            if (CityID != 0)
            {
               
                offers = offers.Where(s => _helperService.checkAddress(s.Supplier.AppUser.Addresses, CityID)).ToList();
                return offers;
            }
              return offers;

            
          
        }

        public async Task<List<Supplier>> filterSupplierByCity(int CityID, string categoryName)
        {
            List<Supplier> suppliers;
            suppliers = (List<Supplier>)await _unitOfWork.Suppliers.FindAllAsync(s => s.IsDeleted == false && s.SupplierCategory.Name == categoryName && s.Approved == true, new List<Expression<Func<Supplier, object>>>()
               {
                   o=>o.AppUser.Addresses,
                   o=>o.SupplierCategory,
                   o=>o.Reviews

            });
            if (CityID != 0)
            {
                suppliers = suppliers.Where(s => _helperService.checkAddress(s.AppUser.Addresses, CityID)).ToList();
                return suppliers;
            }

            return suppliers;
        }

        public List<SupplierOffer> sortingOfferData(List<SupplierOffer> offers, string sortBy)
        {
            if (sortBy == "MostPopular")
            {
                return offers.OrderByDescending(o => o.orders.Count).ToList();

            }
            else if (sortBy == "Cheapest")
            {
                return offers.OrderBy(O => O.Price).ToList();
            }
            else
            {
                return offers.OrderByDescending(O => O.CreatedTime).ToList();

            }
        }
        public async Task<int> calucaluteSupplierRating(Supplier supplier)
        {
            int ratingSum = supplier.Reviews.Select(r => r.Rating).Sum();
            int ratingcount = supplier.Reviews.Select(r => r.Rating).Count();
            if (ratingcount != 0)
            {
                return ratingSum / ratingcount;

            }
            return 0;

        }
        public async Task<int> calucaluteOrdersNumber(int supId)
        {
            List<OwnerOrder> SupplierOrders = (List<OwnerOrder>)await _unitOfWork.OwnerOrders.FindAllAsync(o=>o.SupplierId == supId);
            return SupplierOrders.Count();
        }
        public List<Supplier> sortingSupplierData(List<Supplier> suppliers, string sortBy)
        {
            if (sortBy == "MostPopular")
            {
                return suppliers.OrderByDescending(s => calucaluteOrdersNumber(s.Id)).ToList();

            }
            else if (sortBy == "TopRated")
            {
                return suppliers.OrderBy(s => calucaluteSupplierRating(s)).ToList();
            }

            return suppliers;
        }

 
        public double GetPriceBeforeOffer(SupplierOffer supplierOffer)
        {
            List<SupplierOfferProduct> supplierOffers = (List<SupplierOfferProduct>) _unitOfWork.SupplierOfferProducts.FindAll(o => o.OfferId == supplierOffer.Id, new List<Expression<Func<SupplierOfferProduct, object>>>()
            {
                   o=>o.Offer.Supplier,
                   o=>o.Product
            });
            double PrefPrice = supplierOffers.Select(o => o.Product.Price * o.Quantity).Sum();

            return PrefPrice;
        }

        public async Task<ResultrDto<SupplierDto>> getSupplierByCategory(int PageNumber, int pageSize, int cityId, string name, string SortBy, string Category)
        {
            List<Supplier> suppliers;

            suppliers = await filterSupplierByCity(cityId, Category);

            if (SortBy != "")
            {
                suppliers = sortingSupplierData(suppliers, SortBy);
            }

            if (name != "")
            {
                suppliers = suppliers.Where(s => s.AppUser.Name.ToLower().Trim() == name.ToLower().Trim()).ToList();
            }

            ResultrDto<SupplierDto> suppierResult = new ResultrDto<SupplierDto>();
            suppierResult.itemsCount = suppliers.Count();
            int recSkip = (PageNumber - 1) * pageSize;
            suppliers = suppliers.Skip(recSkip).Take(pageSize).ToList();

            List<SupplierDto> supplierDtos = new List<SupplierDto>();
            suppliers.ForEach(async s =>
            {
                SupplierDto supplier = new SupplierDto();
                supplier = _mapper.Map<SupplierDto>(s);

                supplier.Rating = await calucaluteSupplierRating(s);

                supplierDtos.Add(supplier);

            });
            suppierResult.List = supplierDtos;

            return suppierResult;

        }

        public async Task<ResultrDto<SupplierOfferDto>> filterOffersData(int pageNumber, int pageSize, int cityId, string CategoryName, string sortBy)
        {
            List<SupplierOffer> offers;

            offers = await filterOffersByCity(cityId, CategoryName);

            if (sortBy != string.Empty)
            {
                offers = sortingOfferData(offers, sortBy);
            }


            ResultrDto<SupplierOfferDto> offerFilterResult = new ResultrDto<SupplierOfferDto>();
            offerFilterResult.itemsCount = offers.Count();
            int recSkip = (pageNumber - 1) * pageSize;
            offers = offers.Skip(recSkip).Take(pageSize).ToList();

            List<SupplierOfferDto> OfferDtos = new List<SupplierOfferDto>();
            offers.ForEach(o =>
            {
                SupplierOfferDto Offer = new SupplierOfferDto();
                Offer = _mapper.Map<SupplierOfferDto>(o);

                Offer.PrefPrice = GetPriceBeforeOffer(o);
                Offer.ownerImage = o.Supplier.Image;

                OfferDtos.Add(Offer);

            });
            offerFilterResult.List = OfferDtos;

            return offerFilterResult;

        }
        public async Task<ResultrDto<SupplierOfferDto>> GetAllOffersWithPagination(int pageNumber, int pageSize, int cityId, string SortBy, string Category)
        {
            return await filterOffersData(pageNumber, pageSize, cityId, Category, SortBy);


        }
        public async Task<List<SupplierOfferDto>> GetAllOffersWithoutPagination(string CategoryName, string sortBy)
        {

            return filterOffersData(1, 9, 0, CategoryName, sortBy).Result.List;

        }
    }
}
