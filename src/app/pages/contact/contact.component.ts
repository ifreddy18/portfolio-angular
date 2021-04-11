import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  contact = {
    name: '',
    subject: '',
    email: '',
    message: ''
  };

  sendForm(form: NgForm): void {
    console.log(form);

    Object.values( form.controls ).forEach( control => {
      // console.log(control);
      control.markAsTouched();
    });

    if (form.invalid) {
      return;
    }

    console.log('Forma enviada con exito');
  }

}
