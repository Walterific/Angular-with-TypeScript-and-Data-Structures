import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent {
  foodmenu: string[] = ["Adobo", "Sinigang", "Sitaw"];
  food: string = '';

  addItems() {
    this.foodmenu.push(this.food);
  }
}
