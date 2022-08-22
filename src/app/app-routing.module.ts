import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleCreateComponent } from './article-create/article-create.component';


const routes:Routes=[
  {path:"articles",component:ArticlesComponent},
  {path:"",redirectTo:"articles",pathMatch:"full"},
  {path:"articles/category/:categoryId",component:ArticlesComponent},
  {path:"articles/create",component:ArticleCreateComponent},
  {path:"articles/:articleId",component:ArticleDetailsComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
