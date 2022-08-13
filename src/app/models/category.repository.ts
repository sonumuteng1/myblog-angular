import { Category } from "./category";

export class CategoryRepository{

    private categories:Category[];


    constructor(){
        this.categories=[{id:1,name:"Angular",articles_count:6},
        {id:2,name:"C#",articles_count:8},
        {id:3,name:"Flutter",articles_count:2},
        {id:4,name:"Sql",articles_count:4},
        {id:5,name:"Others",articles_count:3},
        ];
    }
    getCategories():Category[]{
        return this.categories;
    }
    getCategoryById(id:number):Category{
return this.categories.find(i=>i.id==id);
    }
}