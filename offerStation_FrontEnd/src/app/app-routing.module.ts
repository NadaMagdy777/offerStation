import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersIndexComponent } from './pages/owners-index/owners-index.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegestrationComponent } from './components/regestration/customerregestration/regestration.component';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component';

const routes: Routes = [
  {path:"customer",loadChildren:()=>import('./modules/customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:"owner",loadChildren:()=>import('./modules/owner/owner.module').then(mod=>mod.OwnerModule)},
  {path:'',component:HeaderComponent},
  {path:'owners', component:OwnersIndexComponent },
  
  {path:'login', component:LoginComponent },

  {path:'customerRegister', component:RegestrationComponent },
  {path:'ownerRegister', component:OwnerregestrationComponent },
  {path:'supplierRegister', component:SupplierregestrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
