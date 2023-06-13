using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using System.Reflection.PortableExecutable;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        //private readonly ICartService cartService;

        //private readonly RoleManager<IdentityRole> RoleManager;

        public CartController()//ICartService cartService
        {
            //this.cartService = cartService;
        }
        [HttpPost("addProductToCart")]
        public async Task<ActionResult<ApiResponse>> AddProductToCart(int id)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok(new ApiResponse(200,false, new { User, id } ,"Done"));
        }

        [HttpPost("addOfferToCart")]
        public async Task<ActionResult<ApiResponse>> AddOfferToCart(int id)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); }

            return Ok(new ApiResponse(200, false, new { User, id }, "Done"));

        }

    }
}
