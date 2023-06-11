import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerProductComponent } from 'src/app/pages/owner-product/owner-product/owner-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OwnerMenuComponent } from 'src/app/pages/menu/owner-menu/owner-menu.component';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  { path:'product',component:OwnerProductComponent},
];

@NgModule({
  declarations: [
    OwnerProductComponent,
    OwnerMenuComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTabsModule,
    RouterModule.forChild(routes),
  ]
})
export class OwnerModule { }
