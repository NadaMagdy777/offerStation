import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CategoryService } from 'src/app/services/Category/category.service';
import { AdminCategoriesService } from 'src/app/services/admin/admin-owner-categories.service';
import { AdminSupplierCategoryService } from 'src/app/services/admin/admin-supplier-category.service';
import { ImageService } from 'src/app/services/image.service';
import { Category } from 'src/app/sharedClassesAndTypes/Category';
import { PagingParameters } from 'src/app/sharedClassesAndTypes/PagingParameters';

@Component({
  selector: 'app-admin-supplier-category',
  templateUrl: './admin-supplier-category.component.html',
  styleUrls: ['./admin-supplier-category.component.css']
})
export class AdminSupplierCategoryComponent {

  categories: Category[] = [];
  // pageNumber = 1;
  // pageSize = 5;
  imageUrl: string = '';

  newCategory: Category = {
    id: 0,
    name: '',
    image: ''
  };

  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>(); 

  display: string = 'none';
  categoryForm:FormGroup;

  constructor(
    private _categoryService: CategoryService,//AdminSupplierCategoryService,
    private _imageService:ImageService,
    private fb:FormBuilder,
    ) 
    {
      this.categoryForm = this.fb.group({
        name:['',[Validators.required]],
        profilePicture:[[],[Validators.required]]
      });

      this.categoryForm.get('name')?.valueChanges.subscribe((data) => {
        // this.categoryForm.name = data;
      });
      this.categoryForm.get('profilePicture')?.valueChanges.subscribe((data) => {
        // this.categoryForm.profilePicture = data;
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
      this._categoryService.GetAllSupplierCategory()
        .subscribe(response => 
          {
            this.categories = response.data
            console.log("categories: ",this.categories);
            this.dtTrigger.next(null);
            this.categories.forEach((category:Category)=>{
              category.image =this._imageService.base64ArrayToImage(category.image)          
              });
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
