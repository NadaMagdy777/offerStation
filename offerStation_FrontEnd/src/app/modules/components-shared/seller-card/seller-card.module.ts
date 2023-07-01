import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCardComponent } from 'src/app/components/owner-card/owner-card.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [OwnerCardComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    OwnerCardComponent
  ]
})
export class SellerCardModule { }
