import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from 'src/app/pages/admin/admin-main/admin.component';
import { AdminOwnerCategoryComponent } from 'src/app/pages/admin/admin-owner-category/admin-owner-category.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminOwnerCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
