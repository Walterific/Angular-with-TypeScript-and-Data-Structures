import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = ["Forrest Gump", "Avengers: Endgame", "Titanic"];
  movie: string = '';

  addItems() {
    this.movieList.push(this.movie);
  }
}
