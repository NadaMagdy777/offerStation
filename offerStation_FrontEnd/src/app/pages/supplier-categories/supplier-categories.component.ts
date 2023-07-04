import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { SupplierCategory } from 'src/app/sharedClassesAndTypes/SupplierCategory';

@Component({
  selector: 'app-supplier-categories',
  templateUrl: './supplier-categories.component.html',
  styleUrls: ['./supplier-categories.component.css']
})

export class SupplierCategoriesComponent implements OnInit {

  errorMessage: any;
  display = '';
  display1 = '';
  imageUrl: string = '';

  supplierCategory: SupplierCategory = {
    id: 0,
    image: '',
    name: '',
  }
  categories!: SupplierCategory[];
  CategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _supplierService: SupplierService,
    private _imageService: ImageService) {

    this.CategoryForm = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
    });
    this.CategoryForm.get('name')?.valueChanges.subscribe((data) => {
      this.supplierCategory.name = data;
    });
    this.CategoryForm.get('image')?.valueChanges.subscribe((data) => {
      this.supplierCategory.image = data;
    });
  }

  ngOnInit(): void {

    this.LoadData();
  }

  OnImageLoad(image: any) {
    this.imageUrl = this._imageService.base64ArrayToImage(image);
  }

  LoadData() {
    this._supplierService.GetMenuCategoiesBySupplierId(1).subscribe({
      next: data => {
        let dataJson = JSON.parse(JSON.stringify(data))
        this.categories = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  SubmitData() {  

    this._supplierService.AddCategory(1, this.CategoryForm.value).subscribe({
      next: data => {
        console.log(data);
        this.LoadData()
        this.onCloseCategoryHandled();
        this.CategoryForm.reset();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  DeleteCategory(categoryId: number, index: number) {
    console.log(categoryId);
    this._supplierService.DeleteCategory(categoryId).subscribe({
      next: data => {

        this.categories.splice(index, 1);
        console.log(this.categories)
        this.LoadData();

      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  UpdateCategory() {
    this._supplierService.UpdateCategory(this.supplierCategory.id, this.supplierCategory).subscribe({
      next: data => {
        this.LoadData();
        this.onCloseEditCategoryHandled();
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  public async ProcessFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        this.imageUrl = e.target.result;
        this.supplierCategory.image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  openEditCategoryModal(categoryId: number) {
    this.display1 = 'block';
    this._supplierService.GetCategoryDetails(categoryId).subscribe({
      next: data => {
        let dataJson = JSON.parse(JSON.stringify(data))
        this.supplierCategory = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });

  }

  openCategoryModal() {
    this.display = 'block';
    this.CategoryForm.reset();
  }

  onCloseCategoryHandled() {
    this.display = 'none';
  }

  onCloseEditCategoryHandled() {
    this.display1 = 'none';
  }

  //Category Form
  get name() {
    return this.CategoryForm.get('name');
  }
  get image() {
    return this.CategoryForm.get('image');
  }

}
