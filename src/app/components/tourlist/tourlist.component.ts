import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourList: String[] = ["Bandang Lapit - 10/10/2024", "Bandang Lapit - 10/15/2024", "Bandang Lapit - 10/20/2024"];
  tour: String = '';

  addItems(){
    this.tourList.push(this.tour);
  }
}
