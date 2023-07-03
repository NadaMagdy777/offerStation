using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Constants;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.EF.Services;
using OrderStation.Core.Dtos;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }
        [HttpPut("OwnerOrderStatus")]
        public async Task<ActionResult<ApiResponse>> OwnerOrderStatus(int id, OrderStatus status)
        {
            var success = await _orderService.ChangeOwnerOrderStatus(id, status);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpPut("CustomerOrderStatus")]
        public async Task<ActionResult<ApiResponse>> CustomerOrderStatus(int id, OrderStatus status)
        {
            var success = await _orderService.ChangeCustomerOrderStatus(id, status);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }
        [HttpGet("ownerId")]
        public async Task<ActionResult<ApiResponse>> AllOwnerOrders(int ownerId)
        {
             List<OrderDto> orders = await _orderService.GetAllOwnerOrders(ownerId);

            if (orders is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, orders));
        }
    }
}
