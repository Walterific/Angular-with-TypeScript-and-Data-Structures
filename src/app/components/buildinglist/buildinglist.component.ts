import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = ["SVFC Building", "SVFC Empire", "SVFC Kingdom"];
  building: string = '';

  addItems() {
    this.buildingList.push(this.building);
  }
}
