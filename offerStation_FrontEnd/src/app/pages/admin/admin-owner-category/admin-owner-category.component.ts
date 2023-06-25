import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminCategoriesService } from 'src/app/services/admin/admin-owner-categories.service';
import { Category } from 'src/app/sharedClassesAndTypes/Category';

@Component({
  selector: 'app-admin-owner-category',
  templateUrl: './admin-owner-category.component.html',
  styleUrls: ['./admin-owner-category.component.css']
})
export class AdminOwnerCategoryComponent {

  categories: Category[] | undefined;
  pageNumber = 1;
  pageSize = 10;

  display: string = "";
  categoryForm:FormGroup;

  constructor(
    private _categoryService: AdminCategoriesService,
    private fb:FormBuilder
    ) 
    {
      this.categoryForm = this.fb.group({
        name:['',[Validators.required]],
        profilePicture:[[],[Validators.required]]
      });

      this.categoryForm.get('name')?.valueChanges.subscribe((data) => {
        //this.categoryForm.name = data;
      });
      this.categoryForm.get('profilePicture')?.valueChanges.subscribe((data) => {
        //this.categoryForm.profilePicture = data;
      });
    }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._categoryService.GetAllCategories(this.pageNumber, this.pageSize)
      .subscribe(response => 
        {
          this.categories = response.data
          console.log(this.categories);     
        });
  }

  DeleteCategory(categoryId:number, index:number){

  }
  UpdateCategory(){

  }
  openModal(){
    this.display = 'block';
  }
  openEditProductModal(productId: number) {

  }
  onCloseProductHandled() {
    this.display = 'none';
  }
  OnSubmit(){

  }
}
