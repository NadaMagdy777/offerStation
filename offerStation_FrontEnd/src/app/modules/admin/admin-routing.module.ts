import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/pages/admin/admin-main/admin.component';
import { AdminOwnerCategoryComponent } from 'src/app/pages/admin/admin-owner-category/admin-owner-category.component';

const routes: Routes = [
  { path:'', component:AdminComponent},
  { path:'ownerCategory', component:AdminOwnerCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
