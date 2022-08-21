import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Article } from "../models/article";


@Injectable()
export class ArticleService{
    url="http://localhost:3000/articles";

    constructor(private http:HttpClient){}
       
    getArticles():Observable<Article[]>{

        return this.http.get<Article[]>(this.url).
        pipe(tap(data=>console.log(data)));
    }
    

}