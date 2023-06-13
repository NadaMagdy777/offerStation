using Autofac.Features.OwnedInstances;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
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
        [HttpGet("GetAllOwners")]
        public async Task<ActionResult<ApiResponse>> GetAllOwners()
        {
            List<OwnerDto> ownerList = await _ownerService.GetAllOwners();

            if (ownerList is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, ownerList));
        }
        [HttpGet("GetWaitingOwners")]
        public async Task<ActionResult<ApiResponse>> GetWaitingOwners()
        {
            List<OwnerDto> ownerList = await _ownerService.GetWaitingOwners();

            if (ownerList is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, ownerList));
        }
        [HttpGet("GetSuspendedOwners")]
        public async Task<ActionResult<ApiResponse>> GetSuspendedOwners()
        {
            List<OwnerDto> ownerList = await _ownerService.GetSuspendedOwners();

            if (ownerList is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, ownerList));
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
        [HttpDelete("id")]
        public async Task<ActionResult<ApiResponse>> DeleteOwner(int id)
        {
            bool success = await _ownerService.PermanentDeleteOwner(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        [HttpDelete("SuspendOwner/id")]
        public async Task<ActionResult<ApiResponse>> SuspendOwner(int id)
        {
            bool success = await _ownerService.SuspendOwner(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        [HttpPut("RemoveOwnerSuspension/id")]
        public async Task<ActionResult<ApiResponse>> RemoveOwnerSuspension(int id)
        {
            bool success = await _ownerService.RemoveOwnerSuspension(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        [HttpPut("Approve/id")]
        public async Task<ActionResult<ApiResponse>> ApproveOwner(int id)
        {
            bool success = await _ownerService.ApproveOwner(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        [HttpPost("Product/id")]
        public async Task<ActionResult<ApiResponse>> AddProduct(int ownerId, ProductDto product)
        {
            bool success = await _ownerService.AddProduct(ownerId, product);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPut("Product/id")]
        public async Task<ActionResult<ApiResponse>> EditProduct(int id, ProductDto product)
        {
            bool success = await _ownerService.EditProduct(id, product);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpDelete("Product/id")]
        public async Task<ActionResult<ApiResponse>> DeleteProduct(int id)
        {
            bool success = await _ownerService.DeleteProduct(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPost("OwnerCategory")]
        public async Task<ActionResult<ApiResponse>> AddOwnerCategory(OwnerCategoryInfoDto category)
        {
            bool success = await _ownerService.AddCategory(category);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPut("OwnerCategory/id")]
        public async Task<ActionResult<ApiResponse>> EditOwnerCategory(int id, OwnerCategoryInfoDto category)
        {
            bool success = await _ownerService.EditCategory(id, category);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpDelete("OwnerCategory/id")]
        public async Task<ActionResult<ApiResponse>> DeleteOwnerCategory(int id)
        {
            bool success = await _ownerService.DeleteCategory(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpGet("AllOwnersReviews")]
        public async Task<ActionResult<ApiResponse>> GetAllOwnersReviews()
        {
            List<ReviewDto> reviews = await _ownerService.GetAllOwnersReviews();
            if(reviews is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, reviews));
        }
        [HttpGet("AllCustomerReviewsByOwnerId/id")]
        public async Task<ActionResult<ApiResponse>> GetAllCustomerReviews(int ownerId)
        {
            List<ReviewDto> reviews = await _ownerService.GetAllCustomerReviewsByOwnerId(ownerId);

            if (reviews is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, reviews));
        }
        [HttpDelete("OwnerReview/id")]
        public async Task<ActionResult<ApiResponse>> DeleteOwnerReview(int id)
        {
            bool success = await _ownerService.DeleteReview(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
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
            List<ProductInfoDto> product = await _ownerService.GetProductsByMenuCategoryID(id);

            if (product is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, product));
        }
        [HttpGet("AllProductsByOwnerID/id")]
        public async Task<ActionResult<ApiResponse>> GetAllProductsByOwmerID(int ownerid)
        {
            List<ProductInfoDto> products = await _ownerService.GetAllProductsByOwmerID(ownerid);

            if (products is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, products));
        }
  
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
