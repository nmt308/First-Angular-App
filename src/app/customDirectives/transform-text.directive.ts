import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appTransformText]',
})
export class TransformTextDirective {
  @Input() appTransformText = '';
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.textTransform = this.appTransformText;
  }
}
