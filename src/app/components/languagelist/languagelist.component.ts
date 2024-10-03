import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languageList: string[] = ["Python", "C#", "C++"];
  language: string = '';

  addItems() {
    this.languageList.push(this.language);
  }
}
