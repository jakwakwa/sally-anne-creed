import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PageComponent } from './container/page.component';
// components
import { HeaderComponent } from './components/header/header.component';
import { MailerSignupModule } from '../../components/mailer-signup/mailer-signup.module';
import { ArticleIntroComponent } from './components/article-intro/article-intro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    ArticleIntroComponent,
    SidebarComponent
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
