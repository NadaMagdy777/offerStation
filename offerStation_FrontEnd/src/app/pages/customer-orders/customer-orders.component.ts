import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { CustomerOrders, CustomerOrdersOffer, CustomerOrdersProduct, orderStatus } from 'src/app/sharedClassesAndTypes/order';
import { OfferProducts } from 'src/app/sharedClassesAndTypes/product';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  
  ownerId:number=1;
  customerId:number=1;
  ordertList:CustomerOrders[]=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  display:string="none"
  offersResult!:CustomerOrdersOffer[]
  productResult!:CustomerOrdersProduct[]
  orderStatus!:any
  constructor(private OrderService:OrdersService,private OwnerService:OwnerService) 
  {}
 
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 20],
      processing: true
      
    };
    this.OrderService.GetCustomerOrders(this.customerId).subscribe((res) => {
      if (res.success) {
        let dataJson = JSON.parse(JSON.stringify(res))
        this.ordertList=dataJson.data
        console.log(this.ordertList)
        this.dtTrigger.next(null);

      } else {
        console.log(res.message); 
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.dtTrigger.unsubscribe();

  }

  openAddressModal(offerlist:any,productList:any) {
    this.display = 'block';
    this.offersResult=offerlist
    this.productResult=productList
    
    
  }
  getOrderStatus(num:number){
     return orderStatus[num] 
  }
  onCloseAddressHandled() {
    this.display = 'none';
  }  
}
