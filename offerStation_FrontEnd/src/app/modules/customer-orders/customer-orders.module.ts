import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from 'src/app/pages/customer-orders/customer-orders.component';

import {DataTablesModule} from 'angular-datatables';
import { OfferProductDetailsComponent } from 'src/app/components/offer-product-details/offer-product-details.component';
import { CustomerReviewComponent } from 'src/app/pages/customer-review/customer-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomerOrdersComponent,OfferProductDetailsComponent,CustomerReviewComponent], 
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class CustomerOrdersModule { }
