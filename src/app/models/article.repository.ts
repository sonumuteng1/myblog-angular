import { Article } from "./article";

export class ArticleRepository{


    private articles:Article[]=[];
    constructor(){
        this.articles=[
            
        
    ];
       
        
    }

    getArticles():Article[]{
        return this.articles;
    }

    getArticleById(id:number):Article{
        return this.articles.find(i=>i.id==id);
    }

}