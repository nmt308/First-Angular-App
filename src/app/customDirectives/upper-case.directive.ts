import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUpperCase]',
})
export class UpperCaseDirective {
  @Input() typeText = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textTransform = 'uppercase';
  }
}
