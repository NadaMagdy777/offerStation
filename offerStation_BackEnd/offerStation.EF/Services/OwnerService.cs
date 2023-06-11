using AutoMapper;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Linq;
using System.Linq.Expressions;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Globalization;

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
        public async Task<PublicInfoDto?> GetOwner(int id)
        {
            PublicInfoDto? ownerInfo = null;

            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == id,
                new List<Expression<Func<Owner, object>>>()
                {
                    o => o.AppUser,
                });


            if (owner is not null)
            {
                ownerInfo = new PublicInfoDto();
                ownerInfo = _mapper.Map<PublicInfoDto>(owner);
            }

            return ownerInfo;
        }
        public async Task<List<OwnerDto>?> GetAllOwners()
        {
            List<OwnerDto> ownerDtoList = null;

            IEnumerable<Owner> ownerList = await _unitOfWork.Owners
                .FindAllAsync(o => !o.IsDeleted && o.Approved);

            if (ownerList is not null)
            {
                ownerDtoList = new List<OwnerDto>();
                ownerDtoList = _mapper.Map<List<OwnerDto>>(ownerList);
            }
            return ownerDtoList;
        }
        public async Task<List<OwnerDto>?> GetSuspendedOwners()
        {
            List<OwnerDto> ownerDtoList = null;

            IEnumerable<Owner> ownerList = await _unitOfWork.Owners
                .FindAllAsync(o => o.IsDeleted && o.Approved);

            if(ownerList is not null)
            {
                ownerDtoList = new List<OwnerDto>();
                ownerDtoList = _mapper.Map<List<OwnerDto>>(ownerList);
            }
            return ownerDtoList;
        }
        public async Task<List<OwnerDto>?> GetWaitingOwners()
        {
            List<OwnerDto> ownerDtoList = null;

            IEnumerable<Owner> ownerList = await _unitOfWork.Owners
                .FindAllAsync(o => !o.IsDeleted && !o.Approved);

            if(ownerList is not null)
            {
                ownerDtoList = new List<OwnerDto>();
                ownerDtoList = _mapper.Map<List<OwnerDto>>(ownerList);
            }
            return ownerDtoList;
        }
        public async Task<bool> EditOwner(int id, PublicInfoDto ownerInfo)
        {
            Owner owner = await _unitOfWork.Owners.FindAsync(o => o.Id == id,
                new List<Expression<Func<Owner, object>>>()
                {
                    o => o.AppUser,
                });

            if (owner.IsDeleted is false)
            {
                owner.Image = ownerInfo.Image;
                owner.AppUser.Name = ownerInfo.Name;
                owner.AppUser.Email = ownerInfo.Email;
                owner.AppUser.PhoneNumber = ownerInfo.PhoneNumber;

                _unitOfWork.Owners.Update(owner);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> PermanentDeleteOwner(int id)
        {
            Owner owner = await _unitOfWork.Owners.GetByIdAsync(id);

            if (owner is not null)
            {
                owner.Approved = false;
                owner.IsDeleted = true;

                _unitOfWork.Owners.Update(owner);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> SuspendOwner(int id)
        {
            Owner owner = await _unitOfWork.Owners.GetByIdAsync(id);

            if (owner is not null)
            {
                _unitOfWork.Owners.Delete(owner);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> RemoveOwnerSuspension(int id)
        {
            Owner owner = await _unitOfWork.Owners.GetByIdAsync(id);

            if (owner is not null)
            {
                owner.IsDeleted = false;

                _unitOfWork.Owners.Update(owner);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> ApproveOwner(int id)
        {
            Owner owner = await _unitOfWork.Owners.GetByIdAsync(id);

            if (owner is not null)
            {
                owner.Approved = true;

                _unitOfWork.Owners.Update(owner);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> AddProduct(int ownerId, ProductDto productDto)
        {
            if(productDto is not null)
            {
                OwnerProduct product = new OwnerProduct();
                product = _mapper.Map<OwnerProduct>(productDto);

                _unitOfWork.OwnerProducts.Add(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> EditProduct(int id, ProductDto productDto)
        {
            OwnerProduct product = await _unitOfWork.OwnerProducts.FindAsync(p => p.Id == id);

            if(product is not null && productDto is not null)
            {
                product.Name = productDto.Name;
                product.Price = productDto.Price;
                product.Image = productDto.Image;
                product.OwnerId = productDto.TraderId;
                product.Discount = productDto.Discount;
                product.CategoryId = productDto.CategoryId;
                product.Description = productDto.Description;
               
                _unitOfWork.OwnerProducts.Update(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            OwnerProduct product = await _unitOfWork.OwnerProducts.GetByIdAsync(id);

            if(product is not null)
            {
                _unitOfWork.OwnerProducts.Delete(product);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<bool> DeleteReview(int id)
        {
            OwnerReview review = await _unitOfWork.OwnerReviews.GetByIdAsync(id);

            if (review is not null)
            {
                _unitOfWork.OwnerReviews.Delete(review);
                _unitOfWork.Complete();

                return true;
            }
            return false;
        }
        public async Task<List<OwnerOffer>> filterOffersByCity(int CityID, string categoryName)
        {
            List<OwnerOffer> offers;
            offers = (List<OwnerOffer>)await _unitOfWork.OwnerOffers.FindAllAsync(o => o.IsDeleted == false && o.Owner.OwnerCategory.Name == categoryName, new List<Expression<Func<OwnerOffer, object>>>()
               {
                   o=>o.Owner.AppUser.Addresses,
                   o=>o.Owner.OwnerCategory
               });
           
            if (CityID != 0)
            {
              
                offers = offers.Where(o => _helperService.checkAddress(o.Owner.AppUser.Addresses, CityID)).ToList();
                return offers;
            }
           
            return offers;
        }

        public async Task<List<Owner>> filterOwnersByCity(int CityID, string categoryName)
        {
            List<Owner> owners;
            owners = (List<Owner>)await _unitOfWork.Owners.FindAllAsync(o => o.IsDeleted == false && o.OwnerCategory.Name == categoryName && o.Approved == true, new List<Expression<Func<Owner, object>>>()
               {
                   o=>o.AppUser.Addresses,
                   o=>o.OwnerCategory,
                   o=>o.CustomersReviews

            });
            if (CityID != 0)
            {  
                owners = owners.Where(o => _helperService.checkAddress(o.AppUser.Addresses, CityID)).ToList();
                return owners;
            }
           
            return owners;
        }

        public List<OwnerOffer> sortingOwnerOfferData(List<OwnerOffer> offers, string sortBy)
        {
            if (sortBy == "MostPopular")
            {
                return offers.OrderByDescending(o=>o.Orders.Count).ToList();
                
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
        public async Task<int> calucaluteOwnerRating(Owner owner)
        {
           int ratingSum= owner.CustomersReviews.Select(r => r.Rating).Sum();
           int ratingcount = owner.CustomersReviews.Select(r => r.Rating).Count();
            if(ratingcount != 0)
            {
                return ratingSum / ratingcount;

            }
            return 0;
           
        }
        public async Task<int> calucaluteOwnerOrdersNumber(int ownerId)
        {
            List<CustomerOrder> OwnerOrders = (List<CustomerOrder>)await _unitOfWork.CustomerOrders.FindAllAsync(c => c.OwnerId == ownerId);
            return OwnerOrders.Count();
        }
        public List<Owner> sortingOwnerData(List<Owner> owners, string sortBy)
        {
            if (sortBy == "MostPopular")
            {
                return owners.OrderByDescending(o => calucaluteOwnerOrdersNumber(o.Id)).ToList();

            }
            else if (sortBy == "TopRated")
            {
                return owners.OrderBy(calucaluteOwnerRating).ToList();
            }

            return owners;
        }
       
        public async Task<List<OwnerCategoryDto>> GetAllCategories()
        {
            List<OwnerCategory> ownerCategories = (List<OwnerCategory>)_unitOfWork.OwnerCategories.GetAll();
            List<OwnerCategoryDto> ownerCategoriesDto = _mapper.Map<List<OwnerCategoryDto>>(ownerCategories);
            return ownerCategoriesDto;
        }


        public async Task<List<OwnerMenuCategoriesNameDTO>> GetMenuCategoiesByOwnerId(int id)

        {
            List<OwnerMenuCategoriesNameDTO> MenuCategoriesDTOs;

            MenuCategoriesDTOs = new List<OwnerMenuCategoriesNameDTO>();
            IEnumerable<OwnerMenuCategory> result = await _unitOfWork.OwnerMenuCategories.FindAllAsync(d => d.OwnerId == id);

            foreach (OwnerMenuCategory menu in result)
            {
                OwnerMenuCategoriesNameDTO MenuDTO = new OwnerMenuCategoriesNameDTO();  
                MenuDTO.Id = menu.Id;
                MenuDTO.MenuName = menu.MenuName;
                MenuCategoriesDTOs.Add(MenuDTO);
            }
            return MenuCategoriesDTOs;

        }
        public async Task<List<ProductInfoDto>> GetProductsByMenuCategoryID(int id)

        {
            List<ProductInfoDto> OwnerProductsDTOs;

            OwnerProductsDTOs = new List<ProductInfoDto>();
            IEnumerable<OwnerProduct> result = await _unitOfWork.OwnerProducts.FindAllAsync(d => d.CategoryId == id);


            foreach (OwnerProduct product in result)
            {
                ProductInfoDto ProductDTO = new ProductInfoDto();
                ProductDTO.Price = product.Price;
                ProductDTO.Description = product.Description;
                ProductDTO.Name = product.Name;
                ProductDTO.Id = product.Id;
                ProductDTO.Image = product.Image;
                ProductDTO.Discount = product.Discount;


                OwnerProductsDTOs.Add(ProductDTO);
            }
            return OwnerProductsDTOs;

        }
        public async Task<List<ProductInfoDto>> GetAllProductsByOwmerID(int id)
        {
            List<ProductInfoDto> OwnerProductsDTOs = null;

            IEnumerable<OwnerProduct> ownerProducts = await _unitOfWork.OwnerProducts
                .FindAllAsync(d => d.OwnerId == id && !d.IsDeleted);


            if(ownerProducts is not null)
            {
                OwnerProductsDTOs = _mapper.Map<List<ProductInfoDto>>(ownerProducts);
            }
            return OwnerProductsDTOs;
        }
        public double GetPriceBeforeOffer(OwnerOffer ownerOffer)
        {
            List<OwnerOfferProduct> ownerOffers = (List<OwnerOfferProduct>)_unitOfWork.OwnerOfferProducts.FindAll(o => o.OfferId == ownerOffer.Id, new List<Expression<Func<OwnerOfferProduct, object>>>()
            {
                   o=>o.Offer.Owner,
                   o=>o.Product
            });
            double PrefPrice = ownerOffers.Select(o => o.Product.Price * o.Quantity).Sum();

            return PrefPrice;
        }

        public async Task<ResultrDto<OwnerDto>> getOwnersByCategory(int PageNumber, int pageSize, int cityId,string name ,string SortBy, string Category)
        {
            List<Owner> owners;

            owners = await filterOwnersByCity(cityId, Category);

            if (SortBy != "")
            {
                owners = sortingOwnerData(owners, SortBy);
            }

            if(name != "")
            {
               owners= owners.Where(o => o.AppUser.Name.ToLower() == name.ToLower()).ToList();
            }

            ResultrDto<OwnerDto> ownerResult = new ResultrDto<OwnerDto>();
            ownerResult.itemsCount = owners.Count();
            int recSkip = (PageNumber - 1) * pageSize;
            owners = owners.Skip(recSkip).Take(pageSize).ToList();

            List<OwnerDto> ownerDtos = new List<OwnerDto>();
            owners.ForEach(async o =>
            {
                OwnerDto owner = new OwnerDto();
                owner = _mapper.Map<OwnerDto>(o);

                owner.Rating = await calucaluteOwnerRating(o);

                ownerDtos.Add(owner);

            });
            ownerResult.List = ownerDtos;

            return ownerResult;

        }

        public async Task<ResultrDto<OwnerOfferDto>> filterOffersData(int pageNumber,int pageSize,int cityId,string CategoryName,string sortBy)
        {
            List<OwnerOffer> offers;

            offers = await filterOffersByCity(cityId, CategoryName);

            if (sortBy != string.Empty)
            {
                offers = sortingOwnerOfferData(offers, sortBy);
            }


            ResultrDto<OwnerOfferDto> offerFilterResult = new ResultrDto<OwnerOfferDto>();
            offerFilterResult.itemsCount = offers.Count();
            int recSkip = (pageNumber - 1) * pageSize;
            offers = offers.Skip(recSkip).Take(pageSize).ToList();

            List<OwnerOfferDto> ownerOfferDtos = new List<OwnerOfferDto>();
            offers.ForEach(o =>
            {
                OwnerOfferDto ownerOffer = new OwnerOfferDto();
                ownerOffer = _mapper.Map<OwnerOfferDto>(o);

                ownerOffer.PrefPrice = GetPriceBeforeOffer(o);
                ownerOffer.ownerImage = o.Owner.Image;

                ownerOfferDtos.Add(ownerOffer);

            });
            offerFilterResult.List = ownerOfferDtos;

            return offerFilterResult;

        }
        public async Task<ResultrDto<OwnerOfferDto>> GetAllOffersWithPagination(int pageNumber, int pageSize, int cityId, string SortBy, string Category)
        {
            return  await filterOffersData(pageNumber, pageSize, cityId, Category, SortBy);


        }
        public async Task<List<OwnerOfferDto>> GetAllOffersWithoutPagination(string CategoryName,string sortBy)
        {
           
            return filterOffersData(1,9,0, CategoryName, sortBy).Result.List;

        }
       

    }
}
