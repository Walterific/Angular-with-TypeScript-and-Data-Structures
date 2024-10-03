import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[] = ["Hydrangea", "Calla Lily", "Anemone"];
  flower: string = '';

  addItems() {
    this.flowerList.push(this.flower);
  }
}
