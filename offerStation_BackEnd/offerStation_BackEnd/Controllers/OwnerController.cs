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
        private readonly IOwnerService _ownerService;
        public OwnerController(IOwnerService ownerService)
        {
            this._ownerService = ownerService;
        }

        [HttpGet("id")]
        //public async Task<ActionResult<ApiResponse>> GetOwner(int id)
        //{

        //}
        //[HttpGet("id")]

        //public async Task<IActionResult> getAllProductsByOwner(int ID)
        //{

        //}
        [HttpGet("Categories")]

        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(new ApiResponse(200, true, await _ownerService.GetAllCategories()));

        }

        [HttpGet("All/Offers")]
        public async Task<IActionResult> getAllOffers(int PageNumber, int pageSize, string category, int cityId = 0, String SortBy = "")
        {
            var data = await _ownerService.GetAllOffers(PageNumber, pageSize, cityId, SortBy,category);
            return Ok(new ApiResponse(200, true,data));

        }
    }
}
