import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {  ownerOffersPageComponent } from './pages/owner-offers-page/owner-offers-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component'
import { RegestrationComponent } from './components/regestration/customerregestration/regestration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { OwnerFilterComponent } from './components/owner-filter/owner-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OwnerOffersFilterComponent } from './components/owner-offers-filter/owner-offers-filter.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingNewestComponent } from './pages/landing-newest/landing-newest.component';
import { LandingBestSellerComponent } from './pages/landing-best-seller/landing-best-seller.component';
import { LandingTopRateComponent } from './pages/landing-top-rate/landing-top-rate.component';
import { LandingTapsComponent } from './pages/landing-taps/landing-taps.component';
import { AllOwnerComponent } from './pages/all-owner/all-owner.component';
import { OwnersIndexComponent } from './pages/owners-index/owners-index.component';
import { MatSliderModule } from '@angular/material/slider';






@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ownerOffersPageComponent,
    NavbarComponent,
    LoginComponent,
    RegestrationComponent,
    OwnerregestrationComponent,
    SupplierregestrationComponent,
    BannerComponent,
    OwnerFilterComponent,
    OwnerOffersFilterComponent,
    RegestrationComponent,
    HeaderComponent,
    FooterComponent,
    LandingNewestComponent,
    LandingBestSellerComponent,
    LandingTopRateComponent,
    LandingTapsComponent,
    AllOwnerComponent,
    OwnersIndexComponent,

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
