import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = ["Banana", "Apple", "Pineapple"];
  fruit: string = '';

  addItems() {
    this.fruitList.push(this.fruit);
  }
}
