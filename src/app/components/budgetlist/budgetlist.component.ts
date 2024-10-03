import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetList: string[] = ["Monday: ₱500", "Tuesday: ₱500", "Wednesday: ₱500", "Thursday: ₱500", "Friday: ₱500", "Saturday: ₱500", "Sunday: ₱500"];
  budget: string = '';

  addItems() {
    this.budgetList.push(this.budget);
  }
}
