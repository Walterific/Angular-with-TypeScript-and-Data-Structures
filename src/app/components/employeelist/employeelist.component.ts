import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = ["Mr. Inductivo", "Mr. Toribio", "Mr. Cano"];
  employee: string = '';

  addItems() {
    this.employeeList.push(this.employee);
  }
}
