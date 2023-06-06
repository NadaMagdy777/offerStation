import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ResturantOffersPageComponent } from './pages/resturant-offers-page/resturant-offers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ResturantOffersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
