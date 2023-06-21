import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { SupplierofferComponent } from 'src/app/pages/supplieroffers/supplieroffer/supplieroffer.component';
import { SupplierreviewsComponent } from 'src/app/pages/supplierreviews/supplierreviews/supplierreviews.component';
import { SupplierProfileComponent } from 'src/app/pages/supplier-profile/supplier-profile.component';
import { SupplierInfoComponent } from 'src/app/pages/supplier-info/supplier-info.component';
import { SupplierCategoriesComponent } from 'src/app/pages/supplier-categories/supplier-categories.component';
import { SupplierAddressesComponent } from 'src/app/pages/supplier-addresses/supplier-addresses.component';
import { SupplierProductsComponent } from 'src/app/pages/supplier-products/supplier-products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierproductComponent } from 'src/app/pages/supplierproduct/supplierproduct.component';
import { SupplierOffersComponent } from 'src/app/pages/supplier-offers/supplier-offers.component';

const routes: Routes = [
  {
    path: 'profile', component: SupplierProfileComponent, children: [
      { path: 'adresses', component: SupplierAddressesComponent },
      { path: 'Info', component: SupplierInfoComponent },
      { path: 'categories', component: SupplierCategoriesComponent },
      { path: 'products', component: SupplierProductsComponent },
      { path: 'offers', component: SupplierOffersComponent },
    ]
  },
]

@NgModule({
  declarations: [
    // SuppliermainpageComponent,
    SupplierproductComponent,
    SupplierofferComponent,
    SupplierreviewsComponent,
    SupplierProfileComponent,
    SupplierInfoComponent,
    SupplierProductsComponent,
    SupplierCategoriesComponent,
    SupplierAddressesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SupplierRoutingModule,
    MatTabsModule,
    MatSliderModule,
    NgxPaginationModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SupplierModule { }
