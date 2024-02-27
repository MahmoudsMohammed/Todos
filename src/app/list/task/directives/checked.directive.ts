import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[check]',
})
export class checkDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2) {}
  @HostListener('click', ['$event']) checkedElement(e: Event) {
    if (
      (this.eleRef.nativeElement as HTMLElement).style.borderColor !== 'green'
    ) {
      this.render.setStyle(this.eleRef.nativeElement, 'border-color', 'green');
      this.render.setStyle(
        (this.eleRef.nativeElement as HTMLElement).nextElementSibling,
        'text-decoration',
        'line-through'
      );
      this.render.setStyle(
        (this.eleRef.nativeElement as HTMLElement).nextElementSibling,
        'color',
        '#9494A2'
      );
      this.render.setStyle(
        (this.eleRef.nativeElement as HTMLElement).firstElementChild,
        'color',
        'green'
      );
      this.render.setStyle(
        (this.eleRef.nativeElement as HTMLElement).firstElementChild,
        'display',
        'block'
      );
    } else {
      this.render.setStyle(
        this.eleRef.nativeElement,
        'border-color',
        'inherit'
      );
      this.render.setStyle(
        (this.eleRef.nativeElement as HTMLElement).firstElementChild,
        'display',
        'none'
      );
    }
  }
}
