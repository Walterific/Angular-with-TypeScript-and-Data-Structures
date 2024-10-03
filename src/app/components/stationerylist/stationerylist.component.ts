import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationaryList: string[] = ["Staplers", "Desk Organiser", "Highlighters"];
  stationary: string = '';

  addItems() {
    this.stationaryList.push(this.stationary);
  }
}
