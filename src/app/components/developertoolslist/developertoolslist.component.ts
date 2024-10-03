import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent {
  developertoolsList: String[] = ["Visual Studio Code", "Git", "Bootstrap"];
  developerTools: String = '';

  addItems(){
    this.developertoolsList.push(this.developerTools);
  }

}
