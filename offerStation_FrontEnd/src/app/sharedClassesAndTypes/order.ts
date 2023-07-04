
export class CustomerOrders {

    constructor(
      public id: number,
      public orderStatus: orderStatus,
      public orderDate: Date,
      public traderId: number,
      public total: any,
      public products: CustomerOrdersProduct[],
      public offers: CustomerOrdersOffer[],
      public traderName:string

    ) { }
}

export enum orderStatus {
    pending,
    ordered,
    shipped, 
    delivered
}
export class CustomerOrdersProduct {

    constructor(
        public id:number,
        public orderId :number,
        public traderProductId :number,
        public quantity :number,
    ){}
}

export class CustomerOrdersOffer {

    constructor(
        public id:number,
        public orderId :number,
        public traderOfferId :number,
        public quantity :number
    ){}
}

