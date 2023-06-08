using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;
using offerStation.Core.Models;
using System.Numerics;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet("id")]
        public async Task<ActionResult<ApiResponse>> GetCustomer(int id)
        {
            CustomerInfoDto customer = await _customerService.GetCustomer(id);
            
            if (customer is null)
            {
                return BadRequest(new ApiResponse(401, false, "null object"));
            }

            return Ok(new ApiResponse(200, true, customer));
        }
        [HttpPut("id")]
        public async Task<ActionResult<ApiResponse>> Edit(CustomerInfoDto customerDto, int id)
        {
            return Ok(await _customerService.EditCustomer(customerDto, id));
        }
    }
}
