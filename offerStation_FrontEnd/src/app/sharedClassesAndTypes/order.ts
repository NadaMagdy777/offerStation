
export class CustomerOrders {

    constructor(
      public id: number,
      public orderStatus: orderStatus,
      public orderDate: Date,
      public traderId: number,
      public total: any,
      public products: CustomerOrdersProduct[],
      public offers: CustomerOrdersOffer[]
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
        public productId :number,
        public quantity :number
    ){}
}

export class CustomerOrdersOffer {

    constructor(
        public id:number,
        public orderId :number,
        public offerId :number,
        public quantity :number
    ){}
}

