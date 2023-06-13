using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Interfaces.Services;

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

    }
}
