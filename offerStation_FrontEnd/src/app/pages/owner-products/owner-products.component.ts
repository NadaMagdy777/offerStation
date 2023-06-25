import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { ProductDetails, ProductInfo } from 'src/app/sharedClassesAndTypes/ProductInfo';
import { ownerCategory } from 'src/app/sharedClassesAndTypes/ownerCategory';

@Component({
  selector: 'app-owner-products',
  templateUrl: './owner-products.component.html',
  styleUrls: ['./owner-products.component.css']
})
export class OwnerProductsComponent implements OnInit {

  errorMessage: any;
  ProductList: any
  index!: any;

  display = '';
  display1 = '';

  ownerProduct: ProductInfo = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    categoryId: 0,
    discount: 0,
    discountPrice: 0
  }

  categories!: ownerCategory[]
  category!: ownerCategory

  productForm: any = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    discount: [''],
    discountPrice: [''],
    image: [''],
    categoryId: [''],
  });

  constructor(
    private fb: FormBuilder,
    private _ownerService: OwnerService) { }

  ngOnInit(): void {

    this.LoadData();

    this._ownerService.getMenuCategorybyOwnerId(1).subscribe({
      next: data => {
        // console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.categories = dataJson.data
        console.log(this.categories)
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  LoadData() {
    this._ownerService.getAllProductsByOwnerId(1).subscribe({
      next: data => {
        console.log(data);
        let dataJson = JSON.parse(JSON.stringify(data))
        this.ProductList = dataJson.data;
        // console.log(this.ProductList);

      },
      error: error => this.errorMessage = error
    });
  }

  SubmitData() {  //Error when choosing image from the system

    this._ownerService.AddProduct(1, this.productForm.value).subscribe({
      next: data => {
        // console.log(data);
        this.LoadData()
        this.onCloseProductHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteProduct(productId: number, index: number) {

    this._ownerService.DeleteProduct(productId).subscribe({
      next: data => {
        this.ProductList.splice(index, 1);
        this.LoadData();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  UpdateProduct() {
    this._ownerService.UpdateProduct(this.ownerProduct.id, this.productForm.value).subscribe({
      next: data => {
        this.ProductList[this.index] = this.productForm.value;
        this.onCloseEditProductHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  openEditProductModal(product: any, i: any) {
    this.display1 = 'block';
    this.index = i;
    console.log(product)
    this.ownerProduct.id = product.id
    this.productForm.patchValue(
      {
        name: product.name,
        categoryId: product.categoryId,
        discount: product.discount,
        discountPrice: product.discountPrice,
        price: product.price,
        description: product.description,
        image: product.image
      }
    )
    console.log(product.categoryId)
    console.log(this.productForm.get('categoryId').value)

  }

  openProductModal() {
    this.display = 'block';
  }

  onCloseProductHandled() {
    this.display = 'none';
  }

  onCloseEditProductHandled() {
    this.display1 = 'none';
  }

  //Product Form
  get name() {
    return this.productForm.get('name');
  }
  get description() {
    return this.productForm.get('description');
  }
  get price() {
    return this.productForm.get('price');
  }
  get discount() {
    return this.productForm.get('discount');
  }
  get image() {
    return this.productForm.get('image');
  }
  get categoryId() {
    return this.productForm.get('categoryId');
  }
  get discountPrice() {
    return this.productForm.get('discountPrice');
  }

}
