import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from 'src/app/pages/customer-orders/customer-orders.component';

import {DataTablesModule} from 'angular-datatables';
import { OfferProductDetailsComponent } from 'src/app/components/offer-product-details/offer-product-details.component';

@NgModule({
  declarations: [CustomerOrdersComponent,OfferProductDetailsComponent], 
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    DataTablesModule
  ]
})
export class CustomerOrdersModule { }
