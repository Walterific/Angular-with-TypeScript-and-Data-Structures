import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[] = ["Hammer", "Drill", "Pliers"];
  tool: string = '';

  addItems() {
    this.toolList.push(this.tool);
  }
}
