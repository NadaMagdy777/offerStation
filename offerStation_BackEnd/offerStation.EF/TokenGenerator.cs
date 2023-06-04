﻿using MedEase.Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using offerStation.Core.Interfaces;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF
{
    public class TokenGenerator : ITokenGenerator
    {
        private readonly IConfiguration config;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SymmetricSecurityKey key;

        public TokenGenerator(IConfiguration _config, UserManager<ApplicationUser> _userManager)
        {
            this.config = _config;
            userManager = _userManager;
            key = new(Encoding.UTF8.GetBytes(config["JWT:Key"]));
        }

        public async Task<string> GenerateToken(ApplicationUser user, int ID)
        {
            List<Claim> claims = new()
            {
                new(ClaimTypes.Email, user.Email),
                new(ClaimTypes.NameIdentifier, ID.ToString()),
                new(ClaimTypes.Name, user.FirstName+" "+user.LastName),
            };

            var roles = await userManager.GetRolesAsync(user);
            if (roles != null)
            {
                foreach (var role in roles)
                {
                    claims.Add(new(ClaimTypes.Role, role));
                }
            }

            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            SecurityTokenDescriptor tokenDescriptor = new()
            {
                Expires = DateTime.UtcNow.AddDays(double.Parse(config["JWT:ExpInDayes"])),
                Issuer = config["JWT:Issuer"],
                Audience = config["JWT:Audience"],
                SigningCredentials = credentials,
                Subject = new ClaimsIdentity(claims),
            };

            JwtSecurityTokenHandler tokenHandler = new();

            var securityToken = tokenHandler.CreateToken(tokenDescriptor);

            var token = tokenHandler.WriteToken(securityToken);

            return token;
        }
    }
}
