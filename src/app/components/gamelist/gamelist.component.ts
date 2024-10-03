import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[] = ["Pokemon: Ultra Sun", "Pokemon: Black 2", "Pokemon: Black 1"];
  game: string = '';

  addItems() {
    this.gameList.push(this.game);
  }
}
