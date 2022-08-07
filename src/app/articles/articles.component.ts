import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }
 articles:any=[{id:1,title:"C# Giriş Seviye",description:"C Sharp giriş seviyesinde bilgilerin verildiği forum yazısı",imageUrl:"csharpwhite.png"},
 {id:2,title:"Angular Giriş Seviye",description:"Angular orta seviye bilgilerin verildiği forum yazısı",imageUrl:"angularcover.png"},
 {id:3,title:"C# İleri Seviye",description:"C Sharp ileri seviye bilgilerin verildiği forum yazısı",imageUrl:"csharpwhite.png"},
 {id:4,title:"Angular Orta Seviye",description:"Angular giriş seviyesinde bilgilerin verildiği forum yazısı",imageUrl:"angularcover.png"},
 {id:5,title:"C# Orta Seviye",description:"C Sharp orta seviye bilgilerin verildiği forum yazısı",imageUrl:"csharpwhite.png"}];
}
