import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerRequestedOrdersAfterShippedComponent } from 'src/app/pages/owner-requested-orders-after-shipped/owner-requested-orders-after-shipped.component';

const routes: Routes = [
  {path:'',component:OwnerRequestedOrdersAfterShippedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRequestiedOrdersAfterShippedRoutingModule { }
