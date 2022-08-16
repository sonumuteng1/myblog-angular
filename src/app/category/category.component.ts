import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category = null;
  displayAll = true;

  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(data => { this.categories = data; });
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
