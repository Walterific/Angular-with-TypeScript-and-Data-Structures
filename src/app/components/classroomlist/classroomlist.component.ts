import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: string[] = ["Cano, Inductivo, Idanan", "Romano, Avelino, Rosal", "Taay, Toribio, Navales"];
  classroom: string = '';

  addItems() {
    this.classroomList.push(this.classroom);
  }
}
