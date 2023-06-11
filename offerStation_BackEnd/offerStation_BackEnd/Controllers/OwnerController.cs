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
        public async Task<ActionResult<ApiResponse>> GetOwner(int id)
        {
            PublicInfoDto owner = await _ownerService.GetOwner(id);

            if (owner is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));     
            }
            return Ok(new ApiResponse(200, true, owner));
        }
        [HttpGet("AllMenuCategoriesByOwnerId/id")]
        public async Task<ActionResult<ApiResponse>> GetMenuCategory(int id)
        {
            List<OwnerMenuCategoriesNameDTO> menu = await _ownerService.GetMenuCategoiesByOwnerId(id);

            if (menu is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, menu));
        }
        [HttpGet("AllProductsByMenuCategoryID/id")]
        public async Task<ActionResult<ApiResponse>> GetProductsByMenuCategoryID(int id)
        {
            List<OwnerProductDTO> product = await _ownerService.GetProductsByMenuCategoryID(id);

            if (product is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, product));
        }
        [HttpGet("AllProductsByOwnerID/id")]
        public async Task<ActionResult<ApiResponse>> GetAllProductsByOwmerID(int id)
        {
            List<OwnerProductDTO> product = await _ownerService.GetAllProductsByOwmerID(id);

            if (product is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, product));
        }
        [HttpPut("id")]
        public async Task<ActionResult<ApiResponse>> EditOwner(int id, PublicInfoDto owner)
        {
            var success = await _ownerService.EditOwner(id, owner);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        //[HttpGet("id")]

        //public async Task<IActionResult> getAllProductsByOwner(int ID)
        //{

        //}
        [HttpGet("Categories")]

        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(new ApiResponse(200, true, await _ownerService.GetAllCategories()));

        }

        [HttpGet("All/Offers/filter/WithPagination")]
        public async Task<IActionResult> getAllOffersWithPagination(int PageNumber, int pageSize, string category, int cityId = 0, string SortBy = "")
        {
            var data = await _ownerService.GetAllOffersWithPagination(PageNumber, pageSize, cityId, SortBy,category);
            return Ok(new ApiResponse(200, true,data));

        }

        [HttpGet("All/Offers/filter/WithoutPagination")]
        public async Task<IActionResult> getAllOffersWithotPagination(string CategoryName,string sortBy="")
        {
            var data = await _ownerService.GetAllOffersWithoutPagination(CategoryName,sortBy);
            return Ok(new ApiResponse(200, true, data));

        }
        [HttpGet("All/Filter/Pagination")]
        public async Task<IActionResult> getAllOwners(int PageNumber, int pageSize, string category, int cityId = 0, string SortBy = "",string name="")
        {
            var data = await _ownerService.getOwnersByCategory(PageNumber, pageSize, cityId, name,SortBy, category);
            return Ok(new ApiResponse(200, true, data));

        }
    }
}
