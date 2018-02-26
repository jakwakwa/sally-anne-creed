import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PageComponent } from './container/page.component';
// components
import { HeaderComponent } from './components/header/header.component';
import { MailerSignupComponent } from '../../components/mailer-signup/mailer-signup.component';
import { MailerSignupModule } from '../../components/mailer-signup/mailer-signup.module';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MailerSignupModule
  ],
  exports: [
    PageComponent
  ]
})

export class PageModule {}
