import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from 'src/app/pages/admin/admin-main/admin.component';
import { AdminOwnerCategoryComponent } from 'src/app/pages/admin/admin-owner-category/admin-owner-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[]
})
export class AdminModule {}
