import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SuppliermainpageComponent } from 'src/app/pages/supplier-menu/suppliermainpage/suppliermainpage/suppliermainpage.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SupplierproductComponent } from 'src/app/pages/supplier-products/supplierproduct/supplierproduct.component';
import { MatSliderModule } from '@angular/material/slider';
import { SupplierofferComponent } from 'src/app/pages/supplieroffers/supplieroffer/supplieroffer.component';
import { SupplieraddressesComponent } from 'src/app/pages/supplier-addresses/supplieraddresses/supplieraddresses.component';
import { SupplierreviewsComponent } from 'src/app/pages/supplierreviews/supplierreviews/supplierreviews.component';



@NgModule({
  declarations: [
    SuppliermainpageComponent,
    SupplierproductComponent,
    SupplierofferComponent,
    SupplieraddressesComponent,
    SupplierreviewsComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MatTabsModule,
    MatSliderModule
  ]
})
export class SupplierModule { }
