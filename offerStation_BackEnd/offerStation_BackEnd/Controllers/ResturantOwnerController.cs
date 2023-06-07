using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResturantOwnerController : ControllerBase
    {
        private readonly IOwnerOfferService _ownerOfferService;

        public ResturantOwnerController(IOwnerOfferService ownerOfferService)
        {
            this._ownerOfferService = ownerOfferService;
        }


        [HttpGet("All/Offers")]
        public async Task<IActionResult> getAllOffers(int PageNumber, int pageSize, int cityId=0,String SortBy="")
        {

            return Ok(new ApiResponse(200, true, await _ownerOfferService.GetAllOffers(PageNumber,pageSize, cityId, SortBy)));

        }
    }
}
