import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = ["Chapter 1 and 2 - 10/10/2024", "Scalable and Modular Architecture for CSS - 10/5/2024", "Communication Aids Tools and Technology - 10/15/2024"];
  lecture: string = '';

  addItems() {
    this.lectureList.push(this.lecture);
  }
}
