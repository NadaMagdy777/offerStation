using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerMenuCategoryController : ControllerBase
    {
        private readonly IOwnerMenuCategoryService _ownerMenuCategoryService;

        public OwnerMenuCategoryController(IOwnerMenuCategoryService ownerMenuCategoryService)
        {
            _ownerMenuCategoryService = ownerMenuCategoryService;
        }

        [HttpGet("id")]
        public async Task<ActionResult<ApiResponse>> ProductDetails(int id)
        {
            MenuCategoryDetailsDto product = await _ownerMenuCategoryService.GetMenuCategoryDetails(id);
            if (product is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, product));
        }
        [HttpPost("id")]
        public async Task<ActionResult<ApiResponse>> AddProduct(int ownerId, MenuCategoryDto menuCategory)
        {
            bool success = await _ownerMenuCategoryService.AddMenuCategory(ownerId, menuCategory);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPut("id")]
        public async Task<ActionResult<ApiResponse>> EditProduct(int id, MenuCategoryDto menuCategory)
        {
            bool success = await _ownerMenuCategoryService.EditMenuCategory(id, menuCategory);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpDelete("id")]
        public async Task<ActionResult<ApiResponse>> DeleteProduct(int id)
        {
            bool success = await _ownerMenuCategoryService.DeleteMenuCategory(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
    }
}
