import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessoryList: string[] = ["Necklace", "Bracelet", "Watch"];
  accessory: string = '';

  addItems() {
    this.accessoryList.push(this.accessory);
  }

}
