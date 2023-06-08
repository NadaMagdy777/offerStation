import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ownerOffersPageComponent } from './pages/owner-offers-page/owner-offers-page.component';

const routes: Routes = [
  {path:'Resturant/Offers', component:ownerOffersPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
