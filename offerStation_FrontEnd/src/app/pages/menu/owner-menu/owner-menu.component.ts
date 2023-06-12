import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { OwnerService } from 'src/app/services/owner/owner.service';
@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']
  
})
export class OwnerMenuComponent {
MenucategoryList:any;
ProductListByCategoryName:any
  errorMessage: any;
constructor(private owner:OwnerService)
{
  
this.owner.getMenuCategorybyOwnerId(1).subscribe({

  next:data=>
  {
    console.log(data);
    this.MenucategoryList=data.data
  },
  error:error=>this.errorMessage=error

})



}
getAllProductsByOwnerId(){
   this.owner.getAllProductsByOwnerId(1).subscribe({
      next:data=>
      {
        console.log(data);
        this.ProductListByCategoryName=data.data
        console.log("list"+this.ProductListByCategoryName);
      },
      error:error=>this.errorMessage=error
    });
}
getproductBycategoryId(id:number)
{
  if(id==0)
  {
    this.getAllProductsByOwnerId();
  }else{
   
    this.owner.getProductsByCategoryId(id).subscribe({
      next:data=>
      {
        console.log(data);
        this.ProductListByCategoryName=data.data
        console.log("list"+this.ProductListByCategoryName);
      },
      error:error=>this.errorMessage=error
    
     })
  }

 }
} 

