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
import { SupplierOffersComponent } from './pages/supplier-offers/supplier-offers.component';

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
    SupplierOffersComponent,
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
