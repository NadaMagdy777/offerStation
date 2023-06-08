import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ownerOffersPageComponent } from './pages/owner-offers-page/owner-offers-page.component';

const routes: Routes = [
  {path:"customer",loadChildren:()=>import('./modules/customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:"owner",loadChildren:()=>import('./modules/owner/owner.module').then(mod=>mod.OwnerModule)},
  
  {path:'Resturant/Offers', component:ownerOffersPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
