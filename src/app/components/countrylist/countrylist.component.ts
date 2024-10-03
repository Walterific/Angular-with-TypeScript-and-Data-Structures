import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[] = ["Philippines", "Japan", "China"];
  country: string = '';

  addItems() {
    this.countryList.push(this.country);
  }
}
