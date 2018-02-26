import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';

// containers
import { MailerSignupComponent } from './mailer-signup.component';

@NgModule({
  declarations: [
    MailerSignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireLite.forRoot(firebaseConfig)
  ],
  exports: [
    MailerSignupComponent
  ]
})
export class MailerSignupModule {}
