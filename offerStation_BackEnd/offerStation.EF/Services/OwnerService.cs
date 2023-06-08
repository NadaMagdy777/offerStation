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

namespace offerStation.EF.Services
{
    public class OwnerService:IOwnerService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public OwnerService(IUnitOfWork unitOfWork, IMapper mapper)
        {
           this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public bool checkAddress(List<Address> addresses,int CityID)
        {
            Address address = addresses.FirstOrDefault(a => a.CityId == CityID);
            if (address != null)
            {
                return true;
            }
            return false;
        } 
        public async Task<List<OwnerOffer>> filterOffersByCity(int CityID,string categoryName)
        {
            List<OwnerOffer> offers;
            if (CityID != 0)
            {
              offers = (List<OwnerOffer>)await _unitOfWork.OwnerOffers.FindAllAsync(o => o.IsDeleted == false &&o.Owner.OwnerCategory.Name == categoryName, new List<Expression<Func<OwnerOffer, object>>>()
               {
                   o=>o.Owner.AppUser.Addresses,
                   o=>o.Owner.OwnerCategory
               });
                offers = offers.Where(o => checkAddress(o.Owner.AppUser.Addresses, CityID)).ToList();
                return offers;
            }
            else
            {
                offers = (List<OwnerOffer>)await _unitOfWork.OwnerOffers.FindAllAsync(o => o.IsDeleted == false && o.Owner.OwnerCategory.Name== categoryName, new List<Expression<Func<OwnerOffer, object>>>()
               {
                   o=>o.Owner.AppUser.Addresses,
                   o=>o.Owner.OwnerCategory

               });

            }
            return offers;
          

        }
        public List<OwnerOffer> sortingData(List<OwnerOffer> offers, string sortBy)
        {
            if (sortBy == "priceDesc")
            {
                return offers.OrderByDescending(O => O.Price).ToList();
                    ;
            }
            else if(sortBy == "priceAsce")
            {
                return offers.OrderBy(O => O.Price).ToList();
            }
            else
            {
                return offers;
            }
        }
        public async Task<OffersfilteResultrDto> GetAllOffers(int PageNumber,int pageSize, int cityId , String SortBy,string Category)
        {
            List<OwnerOffer> offers;
           
            offers =await  filterOffersByCity(cityId, Category);
            
            if(SortBy!= "") {
              offers=  sortingData(offers, SortBy);
            }
           

            OffersfilteResultrDto  offerFilterResult=new OffersfilteResultrDto();
            offerFilterResult.itemsCount = offers.Count();
            int recSkip = (PageNumber - 1) * pageSize;
            offers= offers.Skip(recSkip).Take(pageSize).ToList();

            List<OwnerOfferDto> ownerOfferDtos = new List<OwnerOfferDto>();
            offers.ForEach( o =>
            {
                OwnerOfferDto ownerOffer = new OwnerOfferDto();
                ownerOffer = _mapper.Map<OwnerOfferDto>(o);
                
                ownerOffer.PrefPrice = GetPriceBeforeOffer(o);
                
                ownerOfferDtos.Add(ownerOffer);

            });
            offerFilterResult.List = ownerOfferDtos;

            return offerFilterResult;
        }
        //public async Task<>
        public async Task<List<OwnerCategoryDto>> GetAllCategories()

        public  double GetPriceBeforeOffer(OwnerOffer ownerOffer)
        {
            List <OwnerOfferProduct> ownerOffers  = (List<OwnerOfferProduct>)  _unitOfWork.OwnerOfferProducts.FindAll(o=>o.OfferId == ownerOffer.Id, new List<Expression<Func<OwnerOfferProduct, object>>>()
        {
                   o=>o.Offer.Owner,
                   o=>o.Product
               });
            double PrefPrice= ownerOffers.Select(o=>o.Product.Price* o.Quantity).Sum();


            return PrefPrice;
            List<OwnerCategory> ownerCategories = (List<OwnerCategory>) _unitOfWork.OwnerCategories.GetAll();
            List<OwnerCategoryDto> ownerCategoriesDto = _mapper.Map<List<OwnerCategoryDto>>(ownerCategories);
            return ownerCategoriesDto;
        }
    }
}
