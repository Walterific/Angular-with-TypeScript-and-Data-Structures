import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = ["Mona Lisa", "Starry Night", "Flaming June"];
  painting: string = '';

  addItems() {
    this.paintingList.push(this.painting);
  }
}
