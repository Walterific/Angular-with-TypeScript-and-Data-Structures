import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sportsList: string[] = ["Basketball", "Volley Ball", "Table Tennis"];
  sports: string = '';

  addItems() {
    this.sportsList.push(this.sports);
  }
}
