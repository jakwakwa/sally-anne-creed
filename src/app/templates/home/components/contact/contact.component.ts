import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent {

  constructor() {}

  onSubmit(contactForm: any, isValid: boolean) {
    if (isValid) {
      console.log(contactForm);
    }
  };
}
