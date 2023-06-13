
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersRoutingModule } from './owners-routing.module';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ownerOffersPageComponent } from 'src/app/pages/owner-offers-page/owner-offers-page.component';
import { OwnerOffersFilterComponent } from 'src/app/components/owner-offers-filter/owner-offers-filter.component';
import { OwnerFilterComponent } from 'src/app/components/owner-filter/owner-filter.component';
import { AllOwnerComponent } from 'src/app/pages/all-owner/all-owner.component';
import { OwnersIndexComponent } from 'src/app/pages/owners-index/owners-index.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    ProductCardComponent,
    ownerOffersPageComponent,
    OwnerOffersFilterComponent,
    OwnerFilterComponent,
    AllOwnerComponent,
    OwnersIndexComponent,
    BannerComponent,
    
  ],
  imports: [
    NgxPaginationModule,
    MatSliderModule,
    MatTabsModule,
    CommonModule,
    HttpClientModule,
    OwnersRoutingModule,
    RouterModule,
    FormsModule
    
  ]
})
export class OwnersModule { }
