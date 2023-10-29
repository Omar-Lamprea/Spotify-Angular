import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover:TrackModel = {
    cover: 'https://kubomusical.com/wp-content/uploads/2020/09/bad-bunny-x-100pre-1.jpg',
    album: 'BEBE BUNNY',
    name: 'bad-bunny',
    url: 'una cacion',
    _id: 1
  }
}
