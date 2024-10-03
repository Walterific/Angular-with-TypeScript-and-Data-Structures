import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Frédéric Chopin"];
  composer: string = '';

  addItems() {
    this.composerList.push(this.composer);
  }
}
