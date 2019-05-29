import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
