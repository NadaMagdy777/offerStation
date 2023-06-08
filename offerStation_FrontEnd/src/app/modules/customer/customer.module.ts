import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule} from '@angular/material/tabs';
import { CustomerProfileComponent } from 'src/app/pages/customer-profile/customer-profile.component';
import { CustomerInfoComponent } from 'src/app/pages/customer-info/customer-info.component';
import { AddressesComponent } from 'src/app/pages/addresses/addresses.component';
import { AllordersComponent } from 'src/app/pages/allorders/allorders.component';

const routes: Routes = [

  { path:'profile',component:CustomerProfileComponent},

];

@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerInfoComponent,
    AddressesComponent,
    AllordersComponent
  ],
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
