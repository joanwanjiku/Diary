import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightBg]' //you can have this directive as a class .app, then add class = "app"
})
export class HighlightBgDirective {
  @HostBinding('class.card-outline-primary') private isHovering: boolean = false;

  constructor(private el: ElementRef) {                 
    // el.nativeElement.style.backgroundColor = 'gray'
  }

  @HostListener('mouseover') onMouseOver() {
   let upvoteEl = this.el.nativeElement.querySelector('#id')
  //  console.log(upvoteEl)
   this.isHovering = true

  }

  @HostListener('mouseout') onMouseOut() {
    let upvoteEl = this.el.nativeElement.querySelector('#id')
    // console.log(upvoteEl)
    this.isHovering = false
 
   }
}
