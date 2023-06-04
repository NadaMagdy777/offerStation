using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        //private readonly IAccountService _accountService;

        //public AccountController(IAccountService accountService)
        //{
        //    this._accountService = accountService;
        //}

        //[HttpPost("login")]
        //public async Task<ActionResult<ApiResponse>> Login(UserLoginDto dto)
        //{
        //    if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

        //    return Ok(await _accountService.LoginUser(dto));
        //}

        //[HttpPost("Doctor/register")]
        //public async Task<ActionResult<ApiResponse>> DoctorRegister(DoctorRegisterDto dto)
        //{
        //    if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

        //    return Ok(await _accountService.RegisterDoctor(dto));
        //}

        //[HttpPost("Patient/register")]
        //public async Task<ActionResult<ApiResponse>> PatientRegister(UserRegisterDto dto)
        //{
        //    if (!ModelState.IsValid) { return BadRequest(new ApiResponse(400, false, ModelState)); };

        //    return Ok(await _accountService.RegisterPatient(dto));
        //}
    }
}
