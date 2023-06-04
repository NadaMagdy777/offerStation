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
        public DbSet<CustomerCart> CustomerCarts { get; set; }
        public DbSet<CustomerOrder> CustomerOrders { get; set; }
        public DbSet<CustomerReview> CustomerReviews { get; set; }
        public DbSet<CustomerCartProduct> CustomerCartProducts { get; set; }
        public DbSet<CustomerOrderProduct> CustomerOrderProducts { get; set; }

        public DbSet<Owner> Owners { get; set; }
        public DbSet<OwnerCart> OwnerCarts { get; set; }
        public DbSet<OwnerMenu> OwnerMenus { get; set; }
        public DbSet<OwnerOrder> OwnerOrder { get; set; }
        public DbSet<OwnerOffer> OwnerOffers { get; set; }
        public DbSet<OwnerReview> OwnerReviews { get; set; }
        public DbSet<OwnerProduct> OwnerProducts { get; set; }
        public DbSet<OwnerCategory> OwnerCategories { get; set; }
        public DbSet<OwnerCartProduct> OwnerCartProducts { get; set; }
        public DbSet<OwnerOrderProduct> OwnerOrderProducts { get; set; }
        public DbSet<OwnerOfferProduct> OwnerOfferProducts { get; set; }

        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<SupplierMenu> SupplierMenus { get; set; }
        public DbSet<SupplierOffer> SupplierOffers { get; set; }
        public DbSet<SupplierProduct> SupplierProducts { get; set; }
        public DbSet<SupplierCategory> SupplierCategories { get; set; }
        public DbSet<SupplierOfferProduct> SupplierOfferProducts { get; set; }
        
    }
}
