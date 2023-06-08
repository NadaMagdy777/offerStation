import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantOffersPageComponent } from './pages/resturant-offers-page/resturant-offers-page.component';

const routes: Routes = [
  {path:'Resturant/Offers', component:ResturantOffersPageComponent },
  {path:"customer",loadChildren:()=>import('./modules/customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:"owner",loadChildren:()=>import('./modules/owner/owner.module').then(mod=>mod.OwnerModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
