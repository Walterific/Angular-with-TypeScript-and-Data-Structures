import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = ["Inductivo, Walter Mark", "Toribio, Fiercival", "Cano, Roerenz"];
  student: string = '';

  addItems() {
    this.studentList.push(this.student);
  }
}
