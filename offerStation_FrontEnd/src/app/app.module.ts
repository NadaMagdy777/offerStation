import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ResturantOffersPageComponent } from './pages/resturant-offers-page/resturant-offers-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegestrationComponent } from './components/regestration/regestration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { OwnerFilterComponent } from './components/owner-filter/owner-filter.component';
import { OwnerOffersFilterComponent } from './components/owner-offers-filter/owner-offers-filter.component'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ResturantOffersPageComponent,
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
    CustomerProfileComponent,
    CustomerInfoComponent,
    AddressesComponent,
    AllordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    NgxPaginationModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
