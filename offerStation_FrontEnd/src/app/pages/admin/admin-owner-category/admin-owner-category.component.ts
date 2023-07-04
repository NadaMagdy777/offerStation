import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AdminCategoriesService } from 'src/app/services/admin/admin-owner-categories.service';
import { ImageService } from 'src/app/services/image.service';
import { Category } from 'src/app/sharedClassesAndTypes/Category';

@Component({
  selector: 'app-admin-owner-category',
  templateUrl: './admin-owner-category.component.html',
  styleUrls: ['./admin-owner-category.component.css']
})
export class AdminOwnerCategoryComponent {

  categories: Category[] = [];
  pageNumber = 1;
  pageSize = 5;
  imageUrl: string = '';

  newCategory: Category = {
    id: 0,
    name: '',
    image: []
  };

  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>(); 

  display: string = 'none';
  categoryForm:FormGroup;
  
  constructor(
    private _categoryService: AdminCategoriesService,
    private _imageService:ImageService,
    private fb:FormBuilder,
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

    this.dtOptions={
      pagingType:'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 20],
      processing: true
    }
    this.getCategories();
  }

  getCategories(): void {
    this._categoryService.GetAllCategories(this.pageNumber, this.pageSize)
      .subscribe(response => 
        {
          this.categories = response.data
          console.log("categories: ",this.categories);
          this.dtTrigger.next(null);
        });
  }

  public async ProcessFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        this.imageUrl = e.target.result;
        // this..image = await this._imageService.imageToBase64Array(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }
  // onPageChange(event: PageEvent) {
  //   this.pageSize = event.pageSize;
  // }
  onDelete(categoryId:number){

  }
  onUpdate(category:Category){

  }
  openModal(){
    this.display = 'block';
  }

  OnSubmit(){

  }
  OnCancel(){}
}
