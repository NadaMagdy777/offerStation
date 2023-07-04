import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerOrdersRoutingModule } from './owner-orders-routing.module';
import { OwnerOrdersComponent } from 'src/app/pages/owner-orders/owner-orders.component';
import { DataTablesModule } from 'angular-datatables';
import { SupplierProductOfferDetailsComponent } from 'src/app/components/supplier-product-offer-details/supplier-product-offer-details.component';

@NgModule({
  declarations: [OwnerOrdersComponent,SupplierProductOfferDetailsComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    OwnerOrdersRoutingModule
  ]
})
export class OwnerOrdersModule { }
