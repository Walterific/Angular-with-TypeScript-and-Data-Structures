import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phonecontactList: string[] = ["Mama", "Mahal", "Tita"];
  phonecontact: string = '';

  addItems() {
    this.phonecontactList.push(this.phonecontact);
  }
}
