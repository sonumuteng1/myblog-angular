import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {


  selectedCategory: Category = null;
  displayAll = true;
  categoryList:Category[]=[
    {"id":1,"name":"Angular","articles_count":5},
    {"id":2,"name":"C#","articles_count":23},
    {"id":3,"name":"SQL","articles_count":12},
    {"id":4,"name":"Flutter","articles_count":8
}];
  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
   
    // this.categoryService.getCategories().subscribe(data => { this.categories = data; });
     
  }
  



  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;

    }
    else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }


}
