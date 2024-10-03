import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[] = ["Carrots", "Squash", "Baguio Beans"];
  vegetable: string = '';

  addItems() {
    this.vegetableList.push(this.vegetable);
  }
}
