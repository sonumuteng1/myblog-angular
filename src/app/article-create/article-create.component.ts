import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
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
              private router:Router,
              private alertify:AlertifyService ) { }

  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe(data=>{
    //   this.categories=data;
    // })
  }

  createArticle(title:any,description:any,imageUrl:any,categoryId:any){

    if(title.value===""|| description.value===""||imageUrl.value===""||categoryId.value==="-1"){
      this.alertify.error("All information is required!");
      return;
    }

    // extar controls and validations for article create form.

    if(title.value.length<2){
      this.alertify.error("Title must have min. 2 character")
      return;
    }
    if(description.value.length<10){
      this.alertify.error("Description must have min. 10 character")
      return;
    }

    const extensions=["jpeg","jpg","png"];
    const extension=imageUrl.value.split(".").pop();

    if(extensions.indexOf(extension)===-1){
      this.alertify.error("Only jpeg, jpg, png can be load");
      return;
    }







    
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
