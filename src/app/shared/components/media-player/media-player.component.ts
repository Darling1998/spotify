import { Component,OnInit } from '@angular/core';
import { TrackModel } from '@core/modelos/tracks.model';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent  implements OnInit{

  mockCover : TrackModel={
    _id:1,
    name:'ds',
    album:'',
    cover:'',
    url:''
  }

  ngOnInit(): void {
   

  }


}
