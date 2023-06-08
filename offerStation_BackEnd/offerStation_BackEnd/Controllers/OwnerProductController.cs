using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerProductController : ControllerBase
    {
        private readonly IOwnerProductService _ownerProduct;
        OwnerProductController(IOwnerProductService ownerProduct)
        {
            _ownerProduct = ownerProduct;
        }

        //[HttpGet("id")]

        //public async Task<IActionResult> getAllProductsByOwner(int ID)
        //{

        //}
    }
}
