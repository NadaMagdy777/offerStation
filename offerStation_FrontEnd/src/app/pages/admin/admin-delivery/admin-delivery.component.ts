import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DeliveryInfo } from 'src/app/sharedClassesAndTypes/DeliveryInfo';

@Component({
  selector: 'app-admin-delivery',
  templateUrl: './admin-delivery.component.html',
  styleUrls: ['./admin-delivery.component.css']
})
export class AdminDeliveryComponent {

  Deliveries:DeliveryInfo[] = [];

  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>(); 


}
