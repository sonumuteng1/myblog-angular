import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Article } from "../models/article";


@Injectable()
export class ArticleService{
    url="http://localhost:3000/articles";

    constructor(private http:HttpClient){}
       
    getArticles(categoryId:number):Observable<Article[]>{
        
        let newUrl=this.url;
        if(categoryId){
            newUrl+="?categoryId="+categoryId;
        }

        return this.http.get<Article[]>(newUrl).
        pipe(tap(data=>console.log(data)));
    }

    getArticleById(articleId:number):Observable<Article>{
        return this.http.get<Article>(this.url+"/"+articleId).
        pipe(tap(data=>console.log(data)));

    }

    createArticle(article:Article):Observable<Article>{
        const httpOptions={
            headers:new HttpHeaders({
                "Content-Type":"application/json",
                "Authorization":"Token",
            })
        }
        return this.http.post<Article>(this.url,article,httpOptions).
        pipe(tap(data=>console.log(data)));
    }
    

}