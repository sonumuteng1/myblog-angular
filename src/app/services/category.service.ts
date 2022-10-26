import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService{

    categoryList:any=[
        {"id":1,"name":"Angular","articles_count":5},
        {"id":2,"name":"C#","articles_count":23},
        {"id":3,"name":"SQL","articles_count":12},
        {"id":4,"name":"Flutter","articles_count":8
    }];

// url="http://localhost:3000/categories";
//     constructor(private http:HttpClient){}
//     getCategories():Observable<Category[]>{
//         return this.http.get<Category[]>(this.url);
//     }


}