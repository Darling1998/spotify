import { Injectable } from '@angular/core';
import { TrackModel } from '@core/modelos/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/data.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor() {
    const {data} :any=(dataRaw as any).default;

    /*Primera forma de crear un observable */
    this.dataTracksTrending$=of(data);


    /*Segunda forma de crear un observable*/
    this.dataTracksRandom$ = new Observable ((observer)=>{
      const trackExample : TrackModel={
        _id:29,
        album:'La Isla',
        name:'Baila Mas',
        url:'http://',
        cover:''
      }


      //Despues de 3 seg va a aparecer como nueva cancion
      setTimeout(()=>{
        observer.next([trackExample]);
      },3500)
     
    })
   }


}
