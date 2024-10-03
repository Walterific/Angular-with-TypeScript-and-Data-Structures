import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productList: string[] = ["Kopiko Blanca", "Lucky Me Pancit Canton", "Safeguard"];
  product: string = '';

  addItems() {
    this.productList.push(this.product);
  }
}
