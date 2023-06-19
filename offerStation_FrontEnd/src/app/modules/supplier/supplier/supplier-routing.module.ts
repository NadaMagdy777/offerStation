import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliermainpageComponent } from 'src/app/pages/supplier-menu/suppliermainpage/suppliermainpage/suppliermainpage.component';



const routes: Routes = [
  { path: 'mainpage', component: SuppliermainpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
