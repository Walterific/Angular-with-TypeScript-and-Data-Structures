import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealplanList: string[] = [
    "Monday - Breakfast: Tapsilog || Lunch: Sinigang na Baboy with rice || Dinner: Daing na Bangus with ensaladang kamatis",
    "Tuesday - Breakfast: Longsilog || Lunch: Kare-Kare with bagoong and rice || Dinner: Tinolang Manok with malunggay and rice",
    "Wednesday - Breakfast: Champorado with tuyo || Lunch: Adobong Manok with rice || Dinner: Paksiw na Bangus with rice",
    "Thursday - Breakfast: Pandesal with kesong puti and kapeng barako || Lunch: Bicol Express with rice || Dinner: Inihaw na Liempo with atsara",
    "Friday - Breakfast: Arroz Caldo with tokwa’t baboy || Lunch: Pinakbet with fried tilapia and rice || Dinner: Ginataang Hipon with rice",
    "Saturday - Breakfast: Tocilog || Lunch: Laing with rice || Dinner: Crispy Pata with soy-vinegar dip and rice",
    "Sunday - Breakfast: Suman with ripe mango and tsokolate || Lunch: Lechon Kawali with rice and liver sauce || Dinner: Pancit Canton"
  ];
  mealplan: string = '';

  addItems() {
    this.mealplanList.push(this.mealplan);
  }
}
