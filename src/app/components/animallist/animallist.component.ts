import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animalList: string[] = ["Dog", "Cat", "Parrot"];
  animal: string = '';

  addItems() {
    this.animalList.push(this.animal);
  }
}
