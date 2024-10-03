import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = ["Macbook", "Hp", "ROG"];
  laptop: string = '';

  addItems() {
    this.laptopList.push(this.laptop);
  }
}
