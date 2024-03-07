import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const inputValue = this.el.nativeElement.value;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    if (!valid) {
      this.el.nativeElement.classList.add('invalid-email');
    } else {
      this.el.nativeElement.classList.remove('invalid-email');
    }
  }
}
