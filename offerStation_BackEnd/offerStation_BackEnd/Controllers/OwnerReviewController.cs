﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using offerStation.Core.Dtos;
using offerStation.Core.Interfaces.Services;

namespace offerStation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerReviewController : ControllerBase
    {
        private readonly IOwnerService _ownerService;
        public OwnerReviewController(IOwnerService ownerService)
        {
            this._ownerService = ownerService;
        }

        [HttpPost("id")]
        public async Task<ActionResult<ApiResponse>> AddReview(int ownerId, int supplierId, ReviewInfoDto review)
        {
            bool success = await _ownerService.AddReview(ownerId, supplierId, review);
            if (success)
            {
                return Ok(new ApiResponse(201, true, success));
            }
            return BadRequest(new ApiResponse(500, false, success));
        }
        [HttpGet("AllOwnersReviews")]
        public async Task<ActionResult<ApiResponse>> GetAllOwnersReviews()
        {
            List<ReviewDto> reviews = await _ownerService.GetAllOwnersReviews();
            if (reviews is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, reviews));
        }
        [HttpGet("AllCustomerReviewsByOwnerId/id")]
        public async Task<ActionResult<ApiResponse>> GetAllCustomerReviews(int ownerId)
        {
            List<ReviewDto> reviews = await _ownerService.GetAllCustomerReviewsByOwnerId(ownerId);

            if (reviews is null)
            {
                return BadRequest(new ApiResponse(404, false, "null object"));
            }
            return Ok(new ApiResponse(200, true, reviews));
        }
        [HttpDelete("OwnerReview/id")]
        public async Task<ActionResult<ApiResponse>> DeleteOwnerReview(int id)
        {
            bool success = await _ownerService.DeleteReview(id);
            if (success)
            {
                return Ok(new ApiResponse(200, true, success));
            }
            return BadRequest(new ApiResponse(500, false, "server error"));
        }

    }
}