import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minlength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]
})
export class MinLengthDirective implements Validator {
  private _minLength!: number;

  @Input()
  set minlength(value: string | number) {
    this._minLength = typeof value === 'string' ? parseInt(value, 10) : value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (!value) {
      return null; // Se o valor estiver vazio, não há erro de validação
    }

    if (value.length < this._minLength) {
      return { 'minlength': { 'requiredLength': this._minLength, 'actualLength': value.length } };
    }

    return null; // Retorna nulo se a validação passar
  }
}
