import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from 'src/app/pages/owner-dashboard/owner-dashboard.component';

import { OwnerDashboardRoutingModule } from './owner-dashboard-routing.module';
import { BarChartComponent } from 'src/app/components/bar-chart/bar-chart.component';



@NgModule({
  declarations: [OwnerDashboardComponent, BarChartComponent],
  imports: [
    CommonModule,
    OwnerDashboardRoutingModule,
  ]
})
export class OwnerDashboardModule { }
