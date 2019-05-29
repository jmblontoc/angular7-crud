import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Movie } from 'src/entities/movie';
import { MOVIES } from '../../data'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() movie : Movie
  @Output() flag : EventEmitter<boolean> = new EventEmitter()


  // form inputs add
  inputTitle : string
  inputProtagonist: string
  inputAntagonist: string

  showAddForm() : void {
    this.movie = null
    this.flag.emit(true)
  }

  validate(fields : Array<string>) : boolean {
    
    for (let i in fields) {
      if (!fields[i]) {
        alert("Please fill up this field")
        return false;
      }
      else if (fields[i].trim() === "") {
        alert("Please fill up this field")
        return false;
      }
    }

    return true;
  }

  generateId() : number {

    if (MOVIES.length === 0) { return 1 }

    return MOVIES[MOVIES.length - 1].id + 1
  }

  add() : void {
    
    let title = this.inputTitle
    let protagonist = this.inputProtagonist
    let antagonist = this.inputAntagonist

    if (this.validate([title, protagonist, antagonist])) {
      let id = this.generateId()
      let movie = new Movie(id, title, protagonist, antagonist)
      MOVIES.push(movie)
      
      this.inputTitle = null
      this.inputProtagonist = null
      this.inputAntagonist = null
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
