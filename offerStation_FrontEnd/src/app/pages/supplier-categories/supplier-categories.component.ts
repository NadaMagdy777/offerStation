import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  supplierCategory: SupplierCategory = {
    id: 0,
    image: '',
    name: '',
  }
  categories!: SupplierCategory[];
  CategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _supplierService: SupplierService) {

    this.CategoryForm = this.fb.group({
      name: [''],
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

  LoadData() {
    this._supplierService.GetMenuCategoiesBySupplierId(1).subscribe({
      next: data => {
        let dataJson = JSON.parse(JSON.stringify(data))
        this.categories = dataJson.data;
      },
      error: (error: any) => this.errorMessage = error,
    });
  }

  SubmitData() {  //Error when choosing image from the system

    this._supplierService.AddCategory(1, this.CategoryForm.value).subscribe({
      next: data => {
        console.log(data);
        this.LoadData()
        this.onCloseCategoryHandled();
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
