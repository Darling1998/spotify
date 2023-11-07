import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  //Emitimos la reproduccion de los cards al mediaplayer o reproductor 
  callback: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }


}
