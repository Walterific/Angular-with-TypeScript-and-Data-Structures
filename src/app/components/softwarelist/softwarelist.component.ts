import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = ["Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel"];
  software: string = '';

  addItems() {
    this.softwareList.push(this.software);
  }
}
