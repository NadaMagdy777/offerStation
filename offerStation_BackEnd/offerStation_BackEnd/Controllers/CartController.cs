using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService cartService;

        private readonly RoleManager<IdentityRole> RoleManager;

        public CartController(ICartService cartService)
        {
            this.cartService = cartService;
        }

        [HttpPost("addToCart")]
        public async Task<ActionResult<ApiResponse>> AddToCart(UserLoginDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok();
        }

        [HttpPost("Customer/register")]
        public async Task<ActionResult<ApiResponse>> CustomerRegister(CustomerRegestrationDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok();
        }

        [HttpPost("Owner/register")]
        public async Task<ActionResult<ApiResponse>> OwnerRegister(OwnerRegestrationDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok();
        }
        [HttpPost("Supplier/register")]
        public async Task<ActionResult<ApiResponse>> SupplierRegister(SupplierRegestrationDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok();
        }

        [HttpPost("createRole")]
        public async Task<ActionResult<ApiResponse>> CreateRole(string Role)
        {

            var roleExists = await RoleManager.RoleExistsAsync(Role);
            if (!roleExists)
            {
                var role = new IdentityRole(Role);
                var result = await RoleManager.CreateAsync(role);
                return new ApiResponse(200, true, null, "Created");
            }

            return BadRequest(new ApiResponse(400, false, ModelState));
        }

        //[HttpPost("Patient/register")]
        //public async Task<ActionResult<ApiResponse>> PatientRegister(UserRegisterDto dto)
        //{
        //    if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

        //    return Ok(await _accountService.RegisterPatient(dto));
        //}
    }
}
