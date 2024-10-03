import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectList: string[] = ["SYSTEM INTEGRATION AND ARCHITECTURE 2", "INFORMATION ASSURANCE AND SECURITY 2 IAS 102", "CAPSTONE PROJECT 1 CAP 101"];
  subject: string = '';

  addItems() {
    this.subjectList.push(this.subject);
  }
}
