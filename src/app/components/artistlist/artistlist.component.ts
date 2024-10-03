import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = ["Ed Sheeran", "Eminem", "Taylor Swift"];
  artist: string = '';

  addItems() {
    this.artistList.push(this.artist);
  }
}
