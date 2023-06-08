import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerProfileComponent } from 'src/app/pages/customer-profile/customer-profile.component';

const routes: Routes = [

  { path:'profile',component:CustomerProfileComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTabsModule
  ]
})
export class CustomerModule { }
