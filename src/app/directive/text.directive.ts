import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective implements OnChanges {
  @Input() appText: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appText) {
      this.el.nativeElement.innerText = changes.appText.currentValue || 'Some text';
    }
  }
}
