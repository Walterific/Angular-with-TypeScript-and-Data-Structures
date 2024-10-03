import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = ["Toyota Camry", "Honda CR-V", "Tesla Model Y"];
  carModel: string = '';

  addItems() {
    this.carModelList.push(this.carModel);
  }
}
