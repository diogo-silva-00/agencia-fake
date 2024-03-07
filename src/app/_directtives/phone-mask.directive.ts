import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    // Remove qualquer caractere que não seja dígito
    const initialValue = this.el.nativeElement.value.replace(/\D/g, '');

    // Aplica a máscara
    if (initialValue.length <= 16) {
      this.el.nativeElement.value = initialValue.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      this.el.nativeElement.value = initialValue.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    // Emitir o evento de input
    this.el.nativeElement.dispatchEvent(new Event('input'));
  }
}
