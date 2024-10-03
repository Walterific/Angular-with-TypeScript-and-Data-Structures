import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = ["Clean Code", "Code Complete", "The Pragmatic Programmer: Your Journey to Mastery, 20th Anniversary Edition"];
  book: string = '';

  addItems() {
    this.bookList.push(this.book);
  }
}
