using Microsoft.EntityFrameworkCore;
using offerStation.Core.Interfaces;
using offerStation.Core.Interfaces.Repositories;
using offerStation.Core.Models;
using offerStation.EF.Data;
using offerStation.EF.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public IBaseRepository<Admin> Admins { get; private set; }
        public IBaseRepository<Customer> Customers { get; private set; }
        public IBaseRepository<CustomerCart> CustomerCarts { get; private set; }
        public IBaseRepository<CustomerOrder> CustomerOrders { get; private set; }
        public IBaseRepository<CustomerReview> CustomerReviews { get; private set; }
        public IBaseRepository<CustomerCartProduct> CustomerCartProducts { get; private set; }
        public IBaseRepository<CustomerOrderProduct> CustomerOrderProducts { get; private set; }

        public IBaseRepository<Owner> Owners { get; private set; }
        public IBaseRepository<OwnerCart> OwnerCarts { get; private set; }
        public IBaseRepository<OwnerMenu> OwnerMenus { get; private set; }
        public IBaseRepository<OwnerOrder> OwnerOrders { get; private set; }
        public IBaseRepository<OwnerOffer> OwnerOffers { get; private set; }
        public IBaseRepository<OwnerReview> OwnerReviews { get; private set; }
        public IBaseRepository<OwnerProduct> OwnerProducts { get; private set; }
        public IBaseRepository<OwnerCategory> OwnerCategories { get; private set; }
        public IBaseRepository<OwnerCartProduct> OwnerCartProducts { get; private set; }
        public IBaseRepository<OwnerOrderProduct> OwnerOrderProducts { get; private set; }
        public IBaseRepository<OwnerOfferProduct> OwnerOfferProducts { get; private set; }

        public IBaseRepository<Supplier> Suppliers { get; private set; }
        public IBaseRepository<SupplierOffer> SupplierOffers { get; private set; }
        public IBaseRepository<SupplierProduct> SupplierProducts { get; private set; }
        public IBaseRepository<SupplierCategory> SupplierCategories { get; private set; }
        public IBaseRepository<SupplierOfferProduct> SupplierOfferProducts { get; private set; }
        public IBaseRepository<SupplierMenuCategory> SupplierMenuCategories { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;

            Admins = new BaseRepository<Admin>(_context);
            Customers = new BaseRepository<Customer>(_context);
            CustomerCarts = new BaseRepository<CustomerCart>(_context);
            CustomerOrders = new BaseRepository<CustomerOrder>(_context);
            CustomerReviews = new BaseRepository<CustomerReview>(_context);
            CustomerCartProducts = new BaseRepository<CustomerCartProduct>(_context);
            CustomerOrderProducts = new BaseRepository<CustomerOrderProduct>(_context);

            Owners = new BaseRepository<Owner>(_context);
            OwnerCarts = new BaseRepository<OwnerCart>(_context);
            OwnerMenus = new BaseRepository<OwnerMenu>(_context);
            OwnerOrders = new BaseRepository<OwnerOrder>(_context);
            OwnerOffers = new BaseRepository<OwnerOffer>(_context);
            OwnerReviews = new BaseRepository<OwnerReview>(_context);
            OwnerProducts = new BaseRepository<OwnerProduct>(_context);
            OwnerCategories = new BaseRepository<OwnerCategory>(_context);
            OwnerCartProducts = new BaseRepository<OwnerCartProduct>(_context);
            OwnerOrderProducts = new BaseRepository<OwnerOrderProduct>(_context);
            OwnerOfferProducts = new BaseRepository<OwnerOfferProduct>(_context);

            Suppliers = new BaseRepository<Supplier>(_context);
            SupplierOffers = new BaseRepository<SupplierOffer>(_context);
            SupplierProducts = new BaseRepository<SupplierProduct>(_context);
            SupplierCategories = new BaseRepository<SupplierCategory>(_context);
            SupplierOfferProducts = new BaseRepository<SupplierOfferProduct>(_context);
            SupplierMenuCategories = new BaseRepository<SupplierMenuCategory>(_context);
        }
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
