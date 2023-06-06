using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            this._accountService = accountService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<ApiResponse>> Login(UserLoginDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

            return Ok(await _accountService.LoginUser(dto));
        }

        [HttpPost("Customer/register")]
        public async Task<ActionResult<ApiResponse>> CustomerRegister(CustomerRegestrationDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

            return Ok(await _accountService.CustomerRegister(dto));
        }

        [HttpPost("Owner/register")]
        public async Task<ActionResult<ApiResponse>> OwnerRegister(OwnerRegestrationDto dto)
        {
            if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

            return Ok(await _accountService.OwnerRegister(dto));
        }

        //[HttpPost("Patient/register")]
        //public async Task<ActionResult<ApiResponse>> PatientRegister(UserRegisterDto dto)
        //{
        //    if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

        //    return Ok(await _accountService.RegisterPatient(dto));
        //}
    }
}
