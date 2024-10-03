import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = ["Monitor", "Mother Board", "CPU"];
  computerHardware: string = '';

  addItems() {
    this.computerHardwareList.push(this.computerHardware);
  }
}
