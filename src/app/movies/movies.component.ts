import { Component, OnInit } from '@angular/core';
import { Movie } from '../../entities/movie'
import { MOVIES } from '../../data'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES
  clickedMovie : Movie

  onClick(movie : Movie): void {
    this.clickedMovie = movie
  }

  willAdd() : void {
    this.clickedMovie = null
  }

  delete(movie : Movie): void {
    this.movies.splice(this.movies.indexOf(movie), 1)

    if (!this.movies.includes(this.clickedMovie)) {
      this.clickedMovie = null
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
