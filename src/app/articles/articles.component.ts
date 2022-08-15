import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleRepository } from '../models/article.repository';
import { AlertifyService } from '../services/alertify.service';



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

 constructor (private alertify:AlertifyService){
  this.articleRepository=new ArticleRepository();
  this.articles=this.articleRepository.getArticles();

 }
 //gets article infos from html when user choose an article
 addToFav($event:any,article:Article){

  console.log($event.target.classList);

  if($event.target.classList.contains("btn-primary")){
    $event.target.innerText="Remove from List";
    $event.target.classList.remove("btn-primary");
    $event.target.classList.add("btn-danger");
    this.alertify.success(article.title+" "+"has been added to the list");
  }else{
    $event.target.innerText="Add to List";
    $event.target.classList.remove("btn-danger");
    $event.target.classList.add("btn-primary");
    this.alertify.error(article.title+" "+"has been removed from the list");
  }

 }


}
