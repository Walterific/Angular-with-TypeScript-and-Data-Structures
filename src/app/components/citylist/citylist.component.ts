import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = ["Caloocan City", "Gapan City", "Batangas City"];
  city: string = '';

  addItems() {
    this.cityList.push(this.city);
  }
}
