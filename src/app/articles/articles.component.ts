import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleRepository } from '../models/article.repository';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 

 

  ngOnInit(): void {
  }
 articles:Article[];
 articleRepository:ArticleRepository;
 filterText:string="";

 constructor (){
  this.articleRepository=new ArticleRepository();
  this.articles=this.articleRepository.getArticles();

 }


}
