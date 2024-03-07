import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fale-conosco-form',
  templateUrl: './fale-conosco-form.component.html',
  styleUrls: ['./fale-conosco-form.component.scss']
})
export class FaleConoscoFormComponent {

  contactForm!: FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('',[Validators.required]),
      cell: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
    })
  }

  get nome() {
    return this.contactForm.get('nome')!
  }

  get cell() {
    return this.contactForm.get('cell')!
  }

  get email() {
    return this.contactForm.get('email')!
  }

  submit () {
    if (this.contactForm.invalid) {
      return
    }

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000)

    alert('Contato enviado')
  }
}
