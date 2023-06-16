import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerProfileComponent } from 'src/app/pages/customer-profile/customer-profile.component';
import { CustomerInfoComponent } from 'src/app/pages/customer-info/customer-info.component';
import { AddressesComponent } from 'src/app/pages/addresses/addresses.component';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [

  { path: 'profile', component: CustomerProfileComponent },

];

@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerInfoComponent,
    AddressesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule

  ],
  exports: [
    MatTabsModule
  ]
})
export class CustomerModule { }
