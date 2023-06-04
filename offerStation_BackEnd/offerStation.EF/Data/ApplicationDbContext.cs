using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using offerStation.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
        }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<OwnerProduct> OwnerProducts { get; set; }
        public DbSet<OwnerCategory> OwnerCategories { get; set; }
        public DbSet<SupplierProduct> SupplierProducts { get; set; }
        public DbSet<SupplierCategory> SupplierCategories { get; set; }

    }
}
