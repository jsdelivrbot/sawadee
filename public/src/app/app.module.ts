import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {ArticlesService} from "./articles/articles.service";
import {ArticlesComponent} from "./articles/articles.component";
import {MainPageComponent} from "./main_page/main-page.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from './angular4-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CarouselModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
