import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/pages/admin/admin-main/admin.component';
import { AdminOwnerCategoryComponent } from 'src/app/pages/admin/admin-owner-category/admin-owner-category.component';
import { AdminOwnerReviewsComponent } from 'src/app/pages/admin/admin-owner-reviews/admin-owner-reviews.component';
import { AdminReviewsComponent } from 'src/app/pages/admin/admin-reviews/admin-reviews.component';
import { AdminSupplierCategoryComponent } from 'src/app/pages/admin/admin-supplier-category/admin-supplier-category.component';

const routes: Routes = [
  { path:'', component:AdminComponent, children: [
    { path:'ownerCategory', component:AdminOwnerCategoryComponent},
    { path:'supplierCategory', component:AdminSupplierCategoryComponent},
    { path:'ownerReview', component:AdminOwnerReviewsComponent},
    { path:'customerReview', component:AdminReviewsComponent},
    { path: 'dashboard', loadChildren: () => import('../admin-dashboard/admin-dashboard.module').then(mod => mod.AdminDashboardModule) },
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
