import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicPlaylist: string[] = ["Sugarfree", "Eraserheads", "Parokya ni Edgar"];
  music: string = '';

  addItems() {
    this.musicPlaylist.push(this.music);
  }
}
