import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvshowList: string[] = ["Family Feud", "AHA", "Kapuso Mo, Jessica Soho"];
  tvShow: string = '';

  addItems() {
    this.tvshowList.push(this.tvShow);
  }
}
