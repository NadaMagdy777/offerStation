import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerProductComponent } from 'src/app/pages/owner-product/owner-product/owner-product.component';
import { MatTabsModule } from '@angular/material/tabs';


const routes: Routes = [
  { path:'product',component:OwnerProductComponent},
];

@NgModule({
  declarations: [
    OwnerProductComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
  ]
})
export class OwnerModule { }
