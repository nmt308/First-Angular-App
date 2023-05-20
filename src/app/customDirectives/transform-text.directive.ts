import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appTransformText]',
})
export class TransformTextDirective {
  constructor(private el: ElementRef) {}

  @Input() set appTransformText(type: string) {
    this.el.nativeElement.style.textTransform = type;
  }
}
