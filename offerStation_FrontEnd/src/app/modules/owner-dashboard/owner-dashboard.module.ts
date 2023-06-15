import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from 'src/app/pages/owner-dashboard/owner-dashboard.component';

import { OwnerDashboardRoutingModule } from './owner-dashboard-routing.module';


@NgModule({
  declarations: [OwnerDashboardComponent],
  imports: [
    CommonModule,
    OwnerDashboardRoutingModule,
    
  ]
})
export class OwnerDashboardModule { }
