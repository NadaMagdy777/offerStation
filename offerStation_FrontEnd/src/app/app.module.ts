import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ResturantOffersPageComponent } from './pages/resturant-offers-page/resturant-offers-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { RegestrationComponent } from './components/regestration/regestration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { OwnerFilterComponent } from './components/owner-filter/owner-filter.component';
import { OwnerOffersFilterComponent } from './components/owner-offers-filter/owner-offers-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ResturantOffersPageComponent,
    NavbarComponent,
    LoginComponent,
    RegestrationComponent,
    BannerComponent,
    OwnerFilterComponent,
    OwnerOffersFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
