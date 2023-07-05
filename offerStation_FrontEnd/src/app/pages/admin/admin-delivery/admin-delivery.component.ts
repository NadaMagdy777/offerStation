import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Delivery } from 'src/app/sharedClassesAndTypes/Delivery';

@Component({
  selector: 'app-admin-delivery',
  templateUrl: './admin-delivery.component.html',
  styleUrls: ['./admin-delivery.component.css']
})
export class AdminDeliveryComponent {

  Deliveries:Delivery[] = [];

  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>(); 

  
}
