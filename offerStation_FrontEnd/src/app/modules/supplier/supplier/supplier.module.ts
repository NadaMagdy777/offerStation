import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SuppliermainpageComponent } from 'src/app/pages/supplier-menu/suppliermainpage/suppliermainpage/suppliermainpage.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SupplierproductComponent } from 'src/app/pages/supplier-products/supplierproduct/supplierproduct.component';
import { MatSliderModule } from '@angular/material/slider';
import { SupplierofferComponent } from 'src/app/pages/supplieroffers/supplieroffer/supplieroffer.component';
import { SupplierreviewsComponent } from 'src/app/pages/supplierreviews/supplierreviews/supplierreviews.component';
import { SupplierProfileComponent } from 'src/app/pages/supplier-profile/supplier-profile.component';
import { SupplierInfoComponent } from 'src/app/pages/supplier-info/supplier-info.component';
import { SupplierCategoriesComponent } from 'src/app/pages/supplier-categories/supplier-categories.component';
import { SupplierAddressesComponent } from 'src/app/pages/supplier-addresses/supplier-addresses.component';
import { SupplierProductsComponent } from 'src/app/pages/supplier-products/supplier-products.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'profile', component: SupplierProfileComponent, children: [
      { path: 'adresses', component: SupplierAddressesComponent },
      { path: 'Info', component: SupplierInfoComponent },
      { path: 'categories', component: SupplierCategoriesComponent },
      { path: 'products', component: SupplierProductsComponent },
    ]
  },
]

@NgModule({
  declarations: [
    SuppliermainpageComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule
  ]
})
export class SupplierModule { }
