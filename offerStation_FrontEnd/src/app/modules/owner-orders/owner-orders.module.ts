import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerOrdersRoutingModule } from './owner-orders-routing.module';
import { OwnerOrdersComponent } from 'src/app/pages/owner-orders/owner-orders.component';
import { DataTablesModule } from 'angular-datatables';
import { SupplierProductOfferDetailsComponent } from 'src/app/components/supplier-product-offer-details/supplier-product-offer-details.component';
import { OwnerReviewComponent } from 'src/app/pages/owner-review/owner-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [OwnerOrdersComponent,SupplierProductOfferDetailsComponent,OwnerReviewComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    OwnerOrdersRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class OwnerOrdersModule { }
