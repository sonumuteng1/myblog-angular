import { Category } from "./category";

export class CategoryRepository{

    private categories:Category[];


    constructor(){
        this.categories=[{id:1,name:"Angular",articles_count:6},
        {id:1,name:"C#",articles_count:8},
        {id:1,name:"Flutter",articles_count:2},
        {id:1,name:"Sql",articles_count:4},
        {id:1,name:"Others",articles_count:3},
        ];
    }
    getCategories():Category[]{
        return this.categories;
    }
    getCategoryById(id:number):Category{
return this.categories.find(i=>i.id==id);
    }
}