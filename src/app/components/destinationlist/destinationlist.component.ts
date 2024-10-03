import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: string[] = ["Boracay Island", "Bananue Rice Terraces", "Tagaytay"];
  destination: string = '';

  addItems() {
    this.destinationList.push(this.destination);
  }
}
