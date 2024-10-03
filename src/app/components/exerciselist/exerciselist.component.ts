import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = ["Push-up", "Lunge", "Squat"];
  exercise: string = '';

  addItems() {
    this.exerciseList.push(this.exercise);
  }
}
