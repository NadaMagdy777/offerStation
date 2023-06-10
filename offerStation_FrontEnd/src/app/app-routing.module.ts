import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersIndexComponent } from './pages/owners-index/owners-index.component';

const routes: Routes = [
  {path:"customer",loadChildren:()=>import('./modules/customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:"owner",loadChildren:()=>import('./modules/owner/owner.module').then(mod=>mod.OwnerModule)},
  {path:'owners', component:OwnersIndexComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
