import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryList: string[] = ["Frozen", "Bakery", "Fruits and Vegetables"];
  inventory: string = '';

  addItems() {
    this.inventoryList.push(this.inventory);
  }
}
