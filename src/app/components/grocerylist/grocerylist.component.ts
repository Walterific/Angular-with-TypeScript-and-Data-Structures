import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: string[] = ["Diswashing Liquid", "Detergent Powder", "Fabric Conditioner"];
  grocery: string = '';

  addItems() {
    this.groceryList.push(this.grocery);
  }
}
