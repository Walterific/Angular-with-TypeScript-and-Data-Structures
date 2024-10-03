import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {

  libraryList: String[] = ["Node.js", "React", "Vue.js"];
  library: String = '';

  addItems(){
    this.libraryList.push(this.library);
  }

}
