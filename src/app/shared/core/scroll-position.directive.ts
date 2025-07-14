import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[scrollPosition]',
  standalone: false,
})
export class ScrollPositionDirective {
  @Output() scrollPosition = new EventEmitter<{ scrollTop: number, scrollHeight: number, clientHeight: number }>();

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    this.scrollPosition.emit({
      scrollTop: target.scrollTop,
      scrollHeight: target.scrollHeight,
      clientHeight: target.clientHeight
    });
  }
}
