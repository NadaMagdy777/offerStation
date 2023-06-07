export class ApiResponce{
    constructor(
        public code:number,
        public Status:boolean,
        public message:string,
        public Data:any,
    ){}
}