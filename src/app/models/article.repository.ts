import { Article } from "./article";

export class ArticleRepository{


    private articles:Article[]=[];
    constructor(){
        this.articles=[
            
        {id:1,title:"C# Giriş Seviye",issueDate:"20.02.2022",description:"C Sharp giriş seviyesinde bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"csharpwhite.png"},
        {id:2,title:"Angular Giriş Seviye",issueDate:"25.12.2021",description:"Angular orta seviye bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"angularcover.png"},
        {id:3,title:"C# İleri Seviye",issueDate:"20.02.2022",description:"C Sharp ileri seviye bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"csharpwhite.png"},
        {id:4,title:"Angular Orta Seviye",issueDate:"20.02.2019",description:"Angular giriş seviyesinde bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"angularcover.png"},
        {id:5,title:"C# Orta Seviye",issueDate:"22.07.2020",description:"C Sharp orta seviye bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"csharpwhite.png"},
        {id:5,title:"C# Başlangıç Seviye",issueDate:"25.12.2021",description:"C Sharp başlangıç seviye bilgilerin verildiği forum yazısı. Yazının devamını okumak için details butonuna tıklayabilirsiniz...",imageUrl:"csharpwhite.png"}
    
    ];
       
        
    }

    getArticles():Article[]{
        return this.articles;
    }

    getArticleById(id:number):Article{
        return this.articles.find(i=>i.id==id);
    }

}