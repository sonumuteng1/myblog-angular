import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers:[CategoryService,ArticleService]
})
export class ArticleCreateComponent implements OnInit {

  categories:Category[];

  constructor(private categoryService:CategoryService,
              private articleService:ArticleService,
              private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  createArticle(title:any,description:any,imageUrl:any,categoryId:any){
    console.log(title.value);
    console.log(description.value);
    console.log(imageUrl.value);
    console.log(categoryId.value);
    
    const article={
    title:title.value,
    description:description.value,
    imageUrl:imageUrl.value,
    categoryId:categoryId.value,
    issueDate:new Date().getTime(),
    detail:description.value,  //buraya ayrıca değer alınmalı
    id:0
    

  };

  this.articleService.createArticle(article).subscribe(data=>
    this.router.navigate(['/articles',data.id]))

  }

  


}
