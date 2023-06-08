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

        //[HttpGet("id")]

        //public async Task<IActionResult> getAllProductsByOwner(int ID)
        //{

        //}
        [HttpGet("Categories")]

        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(new ApiResponse(200, true, await _supplierService.GetAllCategories()));

        }
    }
}
