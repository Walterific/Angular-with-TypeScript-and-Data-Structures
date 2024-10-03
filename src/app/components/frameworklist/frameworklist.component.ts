import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworkList: String[] = ["Flask", "Angular", "Django"];
  frameWork: String = '';

  addItems(){
    this.frameworkList.push(this.frameWork);
  }

}
