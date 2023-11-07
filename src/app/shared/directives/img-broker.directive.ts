import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroker]'
})
export class ImgBrokerDirective {
  @Input() customImg : string = '';
  @HostListener('error') handleError() : void{

    const elNative = this.elHost.nativeElement
    console.log('')
    elNative.src=this.customImg;
  }
  constructor(private elHost:ElementRef) { }

}
