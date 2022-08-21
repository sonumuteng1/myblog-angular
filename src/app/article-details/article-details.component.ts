import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers:[ArticleService]
})
export class ArticleDetailsComponent implements OnInit {

  article:Article;
  constructor(private articleService:ArticleService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.articleService.getArticleById(params["articleId"]).subscribe(data=>{
        this.article=data;
      })
    })
  }

}
