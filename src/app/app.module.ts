import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopicsComponent } from './topics/topics.component';
import { CsharpComponent } from './topics/csharp/csharp.component';
import { AngularComponent } from './topics/angular/angular.component';
import { FlutterComponent } from './topics/flutter/flutter.component';
import { ArticleDetailComponent } from './topics/article-detail/article-detail.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [// Bir component eklemek istediğimizde buraya ekleriz. 
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopicsComponent,
    CsharpComponent,
    AngularComponent,
    FlutterComponent,
    
    ArticleDetailComponent,
          ArticleDetailsComponent,
          ArticlesComponent,
          CategoryComponent
  ],
  imports: [ //dışarıdan bir modül eklemek istediğimizde buraya ekleriz. 
    BrowserModule
  ],
  providers: [// servisler burada eklenir. 

  ],
  bootstrap: [AppComponent] // Başlangıç modülü olarak belirlenen modül
})
export class AppModule { }


// app Component başlangıç componenti olarak seçildi. 
//bunun çağırılması app kendi selector ü ile oluyor. app-root adıyla. 
// app rootu çağıran yer index.html. app root çağırılınca alt komponentlerde çağırılıyor
// alt komponentlerin tanımlanması app.component.html sayfası içerisinde yapılır.
