import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  isOpen = false;

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    // Element which has the directive attached
    const directiveEl = this.el.nativeElement.nextSibling;
    // Clicked element
    const clickedEl = (<HTMLElement>event.target).nextElementSibling;

    this.isOpen = directiveEl.contains(clickedEl) && !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(directiveEl, 'show');
    } else {
      this.renderer.removeClass(directiveEl, 'show');
    }
  }
}
