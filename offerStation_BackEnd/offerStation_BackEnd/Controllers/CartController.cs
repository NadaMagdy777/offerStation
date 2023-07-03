using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using offerStation.EF;
using System.Reflection.PortableExecutable;
using System.Security.Claims;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICustomerCartService cartService;
        public CartController(ICustomerCartService cartService)
        {
            this.cartService = cartService;
        }
        [Authorize]
        [HttpGet("GetCartDetails")]
        public async Task<ActionResult<ApiResponse>> GetCartDetails()
        {

            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.GetCartDetails(int.Parse(useridentifier)));
        }
        [Authorize]
        [HttpPost("addProductToCart")]
        public async Task<ActionResult<ApiResponse>> AddProductToCart(ProductDetailsDto Product)
        {

            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c=>c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.AddProductToCart( int.Parse(useridentifier), Product));
        }

        [HttpPost("addOfferToCart")]
        public async Task<ActionResult<ApiResponse>> AddOfferToCart(ProductDetailsDto Product)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.AddOfferToCart(int.Parse(useridentifier), Product));

        }

        [Authorize]
        [HttpPost("removeProductToCart")]
        public async Task<ActionResult<ApiResponse>> RemoveProductToCart(int ProductId)
        {

            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.RemoveProductFromCart(int.Parse(useridentifier), ProductId));
        }

        [HttpPost("removeOfferToCart")]
        public async Task<ActionResult<ApiResponse>> RemoveOfferToCart(int OfferId)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.RemoveOfferFromCart(int.Parse(useridentifier), OfferId));
        }

        [HttpGet("getCreateOrder")]
        public async Task<ActionResult<ApiResponse>> GetCreateOrder()
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.GetCreateOrder(int.Parse(useridentifier)));
        }
        [HttpPost("postCreateOrder")]
        public async Task<ActionResult<ApiResponse>> PostCreateOrder()
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            var useridentifier = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;

            return Ok(await cartService.PostCreateOrder(int.Parse(useridentifier)));
        }
    }
}
