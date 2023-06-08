import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ResturantOffersPageComponent } from './pages/resturant-offers-page/resturant-offers-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component'
import { RegestrationComponent } from './components/regestration/customerregestration/regestration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ResturantOffersPageComponent,
    NavbarComponent,
    LoginComponent,
    RegestrationComponent,
    OwnerregestrationComponent,
    SupplierregestrationComponent
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
