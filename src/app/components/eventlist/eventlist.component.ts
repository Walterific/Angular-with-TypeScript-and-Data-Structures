import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventList: String[] = ["Bwelta Balentong","Isabuhay","Ahon"];
  event: string = '';

  addItems(){
    this.eventList.push(this.event);
  }
}
