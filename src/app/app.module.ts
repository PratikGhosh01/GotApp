import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from "@angular/router";
import { GotHttpService } from './got-http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SortPipe } from './sort.pipe';
import { CategoryPipe } from './category.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    HouseComponent,
    BookComponent,
    NotFoundComponent,
    SortPipe,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'book/:id', component: BookComponent },
      { path: 'character/:id', component: CharacterComponent },
      { path: 'house/:id', component: HouseComponent },

      { path: '**', component: NotFoundComponent }

    ])

  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
