using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerAnalysisController : ControllerBase
    {
        private readonly IownerAnalysisService _ownerAnalysisService;
        public OwnerAnalysisController(IownerAnalysisService ownerAnalysisService)
        {
           _ownerAnalysisService = ownerAnalysisService;
        }

        [HttpGet("Total/Customer")]
        public async Task<ActionResult<ApiResponse>> getOwnerTotalCustomer(int ownerid)
        {
 
            return Ok(new ApiResponse(200, true, _ownerAnalysisService.getOwnerTotalCustomer(ownerid)));
        }

        [HttpGet("Top/product")]
        public async Task<ActionResult<ApiResponse>> getTopProduct(int ownerid)
        {

            return Ok(new ApiResponse(200, true, _ownerAnalysisService.getTop5OwnerProduct(ownerid)));
        }
        [HttpGet("Top/offer")]
        public async Task<ActionResult<ApiResponse>> getTopoffer(int ownerid)
        {

            return Ok(new ApiResponse(200, true, _ownerAnalysisService.getTop5OwnerOffer(ownerid)));
        }

        [HttpGet("Total/orders")]
        public async Task<ActionResult<ApiResponse>> getOwnerTotalOrders(int ownerid)
        {

            return Ok(new ApiResponse(200, true, _ownerAnalysisService.getOwnerTotalOrders(ownerid)));
        }

        [HttpGet("Total/profits")]
        public async Task<ActionResult<ApiResponse>> getTotalprofits(int ownerid)
        {

            return Ok(new ApiResponse(200, true, _ownerAnalysisService.getTotalProfit(ownerid)));
        }



    }
}
