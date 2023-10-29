import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  //directive is like component so prefer ngOnInit than constructor
  ngOnInit(): void {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    let border = '4px solid ' + color
    this.el.nativeElement.style.border = border;
  }

}
