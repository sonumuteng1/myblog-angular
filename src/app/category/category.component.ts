import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {



  ngOnInit(): void {
  }

  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: Category = null;
  displayAll = true;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
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
