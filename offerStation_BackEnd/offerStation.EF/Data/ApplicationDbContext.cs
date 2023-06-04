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
        public DbSet<Admin> Admin { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<CustomerCart> CustomerCart { get; set; }
        public DbSet<CustomerOrder> CustomerOrder { get; set; }
        public DbSet<CustomerReview> CustomerReview { get; set; }
        public DbSet<CustomerCartProduct> CustomerCartProduct { get; set; }
        public DbSet<CustomerOrderProduct> CustomerOrderProduct { get; set; }

        public DbSet<Owner> Owner { get; set; }
        public DbSet<OwnerCart> OwnerCart { get; set; }
        public DbSet<OwnerMenu> OwnerMenue { get; set; }
        public DbSet<OwnerOrder> OwnerOrder { get; set; }
        public DbSet<OwnerOffer> OwnerOffer { get; set; }
        public DbSet<OwnerReview> OwnerReview { get; set; }
        public DbSet<OwnerProduct> OwnerProduct { get; set; }
        public DbSet<OwnerCategory> OwnerCategory { get; set; }
        public DbSet<OwnerCartProduct> OwnerCartProduct { get; set; }
        public DbSet<OwnerOrderProduct> OwnerOrderProduct { get; set; }
        public DbSet<OwnerOfferProduct> OwnerOfferProduct { get; set; }

        public DbSet<Supplier> Supplier { get; set; }
        public DbSet<SupplierMenuCategory> SupplierMenuCategory { get; set; }
        public DbSet<SupplierOffer> SupplierOffer { get; set; }
        public DbSet<SupplierProduct> SupplierProduct { get; set; }
        public DbSet<SupplierCategory> SupplierCategory { get; set; }
        public DbSet<SupplierOfferProduct> SupplierOfferProduct { get; set; }
        
    }
}
