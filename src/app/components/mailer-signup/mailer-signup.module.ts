import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// containers
import { MailerSignupComponent } from './mailer-signup.component';

@NgModule({
  declarations: [
    MailerSignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MailerSignupComponent
  ]
})
export class MailerSignupModule {}
