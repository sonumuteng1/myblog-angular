import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';


@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articles:Article[],filterText:string): Article[] {
    filterText=filterText.toLowerCase();
    console.log(filterText);
    console.log(articles);

    return filterText? articles.filter((a:Article)=>
    a.title.toLocaleLowerCase().indexOf(filterText) !==-1 || 
    a.description.toLocaleLowerCase().indexOf(filterText) !==-1 ):articles;
  }

}
