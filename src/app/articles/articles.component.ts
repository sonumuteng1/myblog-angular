
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

import { AlertifyService } from '../services/alertify.service';
import { ArticleService } from '../services/article.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  filterText: string = "";
  error: any;

  constructor(
    private alertify: AlertifyService,
    private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    }, error => console.log(error));
  }



  //gets article infos from html when user choose an article
  addToFav($event: any, article: Article) {

    console.log($event.target.classList);

    if ($event.target.classList.contains("btn-primary")) {
      $event.target.innerText = "Remove from List";
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      this.alertify.success(article.title + " " + "has been added to the list");
    } else {
      $event.target.innerText = "Add to List";
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      this.alertify.error(article.title + " " + "has been removed from the list");
    }

  }


}
