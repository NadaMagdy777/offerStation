import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegestrationComponent } from './components/regestration/customerregestration/regestration.component';
import { OwnerregestrationComponent } from './components/regestration/ownerregestration/ownerregestration.component';
import { SupplierregestrationComponent } from './components/regestration/supplierregestration/supplierregestration.component';
import { OwnerDashboardModule } from './modules/owner-dashboard/owner-dashboard.module';

const routes: Routes = [
  { path: "customer", loadChildren: () => import('./modules/customer/customer.module').then(mod => mod.CustomerModule) },
  { path: "supplier", loadChildren: () => import('./modules/supplier/supplier/supplier.module').then(mod => mod.SupplierModule) },
  { path: "owner", loadChildren: () => import('./modules/owner/owner.module').then(mod => mod.OwnerModule) },
  { path: "admin", loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) },
  { path: '', component: HeaderComponent },

  { path: 'login', component: LoginComponent },

  { path: 'customerRegister', component: RegestrationComponent },
  { path: 'ownerRegister', component: OwnerregestrationComponent },
  { path: 'supplierRegister', component: SupplierregestrationComponent },
  { path: 'owners', loadChildren: () => import('./modules/owners/owners.module').then(mod => mod.OwnersModule) },
  { path: 'ownerDashboard', loadChildren: () => import('./modules/owner-dashboard/owner-dashboard.module').then(mod => mod.OwnerDashboardModule) },
  { path: 'supplierDashboard', loadChildren: () => import('./modules/supplier-dashboard/supplier-dashboard.module').then(mod => mod.SupplierDashboardModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
