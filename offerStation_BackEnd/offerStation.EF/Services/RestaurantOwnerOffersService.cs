using AutoMapper;
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
    public class RestaurantOwnerOffersService:IOwnerOfferService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public RestaurantOwnerOffersService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }
        public async Task<List<OwnerOfferDto>> GetAllOffers()
        {
            List<OwnerOffer> OwnerOfferList = (List<OwnerOffer>)await _unitOfWork.OwnerOffers.FindAllAsync(o => o.IsDeleted == false, new List<Expression<Func<OwnerOffer, object>>>()
               {
                   o=>o.Owner.AppUser.Addresses,
               });

            List<OwnerOfferDto> ownerOfferDtos = new List<OwnerOfferDto>();
            OwnerOfferList.ForEach( async o =>
            {
                OwnerOfferDto ownerOffer = new OwnerOfferDto();
                ownerOffer = _mapper.Map<OwnerOfferDto>(o);
                
                ownerOffer.PrefPrice = GetPriceBeforeOffer(o);
                
                ownerOfferDtos.Add(ownerOffer);

            });

            return ownerOfferDtos;
        }
        
        public  double GetPriceBeforeOffer(OwnerOffer ownerOffer)
        {
            List <OwnerOfferProduct> ownerOffers  = (List<OwnerOfferProduct>)  _unitOfWork.OwnerOfferProducts.FindAll(o=>o.OfferId == ownerOffer.Id, new List<Expression<Func<OwnerOfferProduct, object>>>()
               {
                   o=>o.Offer.Owner,
                   o=>o.Product
               });
            double PrefPrice= ownerOffers.Select(o=>o.Product.Price* o.Quantity).Sum();


            return PrefPrice;
        }
    }
}
