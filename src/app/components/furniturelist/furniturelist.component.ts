import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: string[] = ["Chair", "Sofas", "Cabinet"];
  furniture: string = '';

  addItems() {
    this.furnitureList.push(this.furniture);
  }
}
