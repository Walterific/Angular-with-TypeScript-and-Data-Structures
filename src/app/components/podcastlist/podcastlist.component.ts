import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = ["This American Life", "Morbid: A True Crime Podcast", "The Joe Rogan Experience"];
  podcast: string = '';

  addItems() {
    this.podcastList.push(this.podcast);
  }
}
