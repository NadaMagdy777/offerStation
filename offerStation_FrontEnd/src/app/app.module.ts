import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component'
import { RegestrationComponent } from './components/regestration/customerregestration/regestration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingNewestComponent } from './pages/landing-newest/landing-newest.component';
import { LandingBestSellerComponent } from './pages/landing-best-seller/landing-best-seller.component';
import { LandingTopRateComponent } from './pages/landing-top-rate/landing-top-rate.component';
import { LandingTapsComponent } from './pages/landing-taps/landing-taps.component';
import { MatSliderModule } from '@angular/material/slider';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierLandingTapsComponent } from './pages/supplier-landing-taps/supplier-landing-taps.component';
import { SupplierLandingNewestComponent } from './pages/supplier-landing-newest/supplier-landing-newest.component';
import { SupplierLandingBestSellerComponent } from './pages/supplier-landing-best-seller/supplier-landing-best-seller.component';
import { SupplierLandingTopRateComponent } from './pages/supplier-landing-top-rate/supplier-landing-top-rate.component';
import { SupplierOffersComponent } from './pages/supplier-offers/supplier-offers.component';
import { SupplierHeaderComponent } from './components/supplier-header/supplier-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegestrationComponent,
    OwnerregestrationComponent,
    SupplierregestrationComponent,
    RegestrationComponent,
    HeaderComponent,
    FooterComponent,
    LandingNewestComponent,
    LandingBestSellerComponent,
    LandingTopRateComponent,
    LandingTapsComponent,
    SupplierLandingTapsComponent,
    SupplierLandingNewestComponent,
    SupplierLandingBestSellerComponent,
    SupplierLandingTopRateComponent,

    SupplierOffersComponent,
      SupplierHeaderComponent,
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
    MatSliderModule,
    NgbModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
