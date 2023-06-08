using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly IOwnerService _ownerOfferService;

        public OwnerController(IOwnerService ownerOfferService)
        {
            this._ownerOfferService = ownerOfferService;
        }


        [HttpGet("All/Offers")]
        public async Task<IActionResult> getAllOffers(int PageNumber, int pageSize, string category, int cityId = 0, String SortBy = "")
        {
            var data = await _ownerOfferService.GetAllOffers(PageNumber, pageSize, cityId, SortBy,category);
            return Ok(new ApiResponse(200, true,data));

        }
    }
}
