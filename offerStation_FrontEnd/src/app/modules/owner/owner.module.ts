import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerProductComponent } from 'src/app/pages/owner-product/owner-product/owner-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OwnerMenuComponent } from 'src/app/pages/menu/owner-menu/owner-menu.component';
import { MatSliderModule } from '@angular/material/slider';
import { OwnerreviewComponent } from 'src/app/pages/ownerreview/ownerreview.component';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { OwnerProfileComponent } from 'src/app/pages/owner-profile/owner-profile.component';
import { OwnerInfoComponent } from 'src/app/pages/owner-info/owner-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerProductsComponent } from 'src/app/pages/owner-products/owner-products.component';
import { OwnerCategoriesComponent } from 'src/app/pages/owner-categories/owner-categories.component';
import { OwnerAddressesComponent } from 'src/app/pages/owner-addresses/owner-addresses.component';


const routes: Routes = [
  { path: 'product', component: OwnerProductComponent },
  { path: 'profile', component: OwnerProfileComponent },

];

@NgModule({
  declarations: [
    OwnerProductComponent,
    OwnerMenuComponent,
    OwnerreviewComponent,
    OwnerInfoComponent,
    OwnerProfileComponent,
    OwnerAddressesComponent,
    OwnerCategoriesComponent,
    OwnerProductsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class OwnerModule { }
