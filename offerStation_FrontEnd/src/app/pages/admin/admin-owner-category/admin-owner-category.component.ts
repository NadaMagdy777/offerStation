import { Component } from '@angular/core';
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

  constructor(private _categoryService: AdminCategoriesService) { }

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
}
