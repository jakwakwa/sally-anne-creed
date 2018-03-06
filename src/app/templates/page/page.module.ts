import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';
// containers
import { PageComponent } from './container/page.component';
// components
import { MailerSignupModule } from '../../components/mailer-signup/mailer-signup.module';
import { ArticleIntroComponent } from './components/article-intro/article-intro.component';
// service
import { PageService } from './page.service';
import { RouterModule } from '@angular/router';
// reusable component modules
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { HeaderModule } from '../../components/header/header.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    PageComponent,
    ArticleIntroComponent,
  ],
  imports: [
    CommonModule,
    AngularFireLite.forRoot(firebaseConfig),
    MailerSignupModule,
    HeaderModule,
    LoadingSpinnerModule,
    SidebarModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    PageComponent
  ],
  providers: [
    PageService
  ]
})

export class PageModule {}
