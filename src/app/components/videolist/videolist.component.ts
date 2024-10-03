import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = ["Angular Tutorial.mp4", "Python Tutorial.mp4", "React Tutorial.mp4"];
  video: string = '';

  addItems() {
    this.videoList.push(this.video);
  }
}
