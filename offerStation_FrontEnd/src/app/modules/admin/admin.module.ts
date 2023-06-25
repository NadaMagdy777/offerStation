import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from 'src/app/pages/admin/admin-main/admin.component';
import { AdminOwnerCategoryComponent } from 'src/app/pages/admin/admin-owner-category/admin-owner-category.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOwnerCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
