import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover:any = {
    cover: 'https://kubomusical.com/wp-content/uploads/2020/09/bad-bunny-x-100pre-1.jpg',
    album: 'BEBE BUNNY',
    name: 'bad-bunny'
  }
}
