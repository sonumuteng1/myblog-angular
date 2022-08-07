import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories=[{id:1,name:"Angular",articles_count:5},
  {id:1,name:"C#",articles_count:8},
  {id:1,name:"Flutter",articles_count:2},
  {id:1,name:"Sql",articles_count:4},
  {id:1,name:"Others",articles_count:3},];

}
