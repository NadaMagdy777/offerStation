using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAdressService _addressService;

        public AddressController(IAdressService addressService)
        {
            this._addressService = addressService;
        }


        [HttpGet("cities")]
        public async Task<IActionResult> getAllCities()
        {

            return Ok(new ApiResponse(200, true, await _addressService.GetAllCities()));

        }
    }
}
