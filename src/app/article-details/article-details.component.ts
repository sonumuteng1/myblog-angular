import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers:[ArticleService]
})
export class ArticleDetailsComponent implements OnInit {

  article:any;
  constructor(private articleService:ArticleService,
              private activatedRoute:ActivatedRoute,
              private httpClient: HttpClient
) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(params=>{
      this.articleService.getArticleById(params["articleId"]).subscribe(data=>{
        this.article=data;
      })
      
    })
    //debugger;
   // this.httpClient
     // .get("http://localhost:53429/Articles")
     // .subscribe((res)=>{
    //    debugger;
    //    this.article=res;
        
   //   }
   //     
    //  );

    
  }
  

}
