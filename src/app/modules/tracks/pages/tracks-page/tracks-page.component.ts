import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/modelos/tracks.model';
import * as dataRow from '../../../../data/data.json';
import { Subscription } from 'rxjs';
import { TrackService } from '@module/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending : Array<TrackModel> =[];
  tracksRandom : Array<TrackModel> =[];

  listObservables$ : Array<Subscription> = [];

  constructor(private trackService:TrackService){}


  ngOnInit(): void {
    const observer1 = this.trackService.dataTracksTrending$.subscribe(
      response =>{
        this.tracksTrending=response
        console.log(response);
        
      }
    )

    const observer2 = this.trackService.dataTracksRandom$.subscribe(
      response =>{
        this.tracksRandom=[...this.tracksRandom, ...response]
        console.log(response);
        
      }
    )

    this.listObservables$=[observer1,observer2];

  }
}
