using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _supplierService;
        public SupplierController(ISupplierService supplierService)
        {
            this._supplierService = supplierService;
        }

        [HttpGet("id")]
        public async Task<ActionResult<ApiResponse>> GetSupplier(int id)
        {
            PublicInfoDto supplier = await _supplierService.GetSupplier(id);

            if (supplier is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }

            return Ok(new ApiResponse(200, true, supplier));
        }
        [HttpPut("id")]
        public async Task<ActionResult<ApiResponse>> EditSupplier(int id, PublicInfoDto supplierDto)
        {
            var success = await _supplierService.EditSupplier(id, supplierDto);

            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpDelete("id")]
        public async Task<ActionResult<ApiResponse>> SuspendSupplier(int id)
        {
            bool success = await _supplierService.SuspendSupplier(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        
        [HttpPost("Product/id")]
        public async Task<ActionResult<ApiResponse>> AddProduct(int supplierId, ProductDto product)
        {
            bool success = await _supplierService.AddProduct(supplierId, product);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPut("Product/id")]
        public async Task<ActionResult<ApiResponse>> EditProduct(int id, ProductDto product)
        {
            bool success = await _supplierService.EditProduct(id, product);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpDelete("Product/id")]
        public async Task<ActionResult<ApiResponse>> DeleteProduct(int id)
        {
            bool success = await _supplierService.DeleteProduct(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpGet("allProducts/id")]
        public async Task<ActionResult<ApiResponse>> GetAllProductsBySupplierId(int supplierId)
        {
            List<ProductInfoDto> products = await _supplierService.GetAllProducts(supplierId);
            if(products is not null)
            {
                return Ok(new ApiResponse(200, true, products));
            }
            return BadRequest(new ApiResponse(404, false, "null object"));
        }
        [HttpGet("Categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(new ApiResponse(200, true, await _supplierService.GetAllCategories()));

        }

        [HttpGet("All/Offers/filter/WithPagination")]
        public async Task<IActionResult> getAllOffersWithPagination(int PageNumber, int pageSize, string category, int cityId = 0, string SortBy = "")
        {
            var data = await _supplierService.GetAllOffersWithPagination(PageNumber, pageSize, cityId, SortBy, category);
            return Ok(new ApiResponse(200, true, data));

        }

        [HttpGet("All/Offers/filter/WithoutPagination")]
        public async Task<IActionResult> getAllOffersWithotPagination(string CategoryName, string sortBy = "")
        {
            var data = await _supplierService.GetAllOffersWithoutPagination(CategoryName, sortBy);
            return Ok(new ApiResponse(200, true, data));

        }
        [HttpGet("All/Filter/Pagination")]
        public async Task<IActionResult> getAllSuppli(int PageNumber, int pageSize, string category, int cityId = 0, string SortBy = "", string name = "")
        {
            var data = await _supplierService.getSupplierByCategory(PageNumber, pageSize, cityId, name, SortBy, category);
            return Ok(new ApiResponse(200, true, data));

        }
    }
}
