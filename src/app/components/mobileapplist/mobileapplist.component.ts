import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileAppList: string[] = ["Acode", "Deco", "Discord"];
  mobileApp: string = '';

  addItems() {
    this.mobileAppList.push(this.mobileApp);
  }
}
