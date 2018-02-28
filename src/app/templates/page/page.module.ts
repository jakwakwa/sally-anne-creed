import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';

// containers
import { PageComponent } from './container/page.component';
// components
// import { HeaderComponent } from './components/header/header.component';
import { MailerSignupModule } from '../../components/mailer-signup/mailer-signup.module';
import { ArticleIntroComponent } from './components/article-intro/article-intro.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';

// service
import { PageService } from './page.service';
import { RouterModule } from '@angular/router';

// reusable component modules
import { HeaderModule } from '../../components/header/header.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    PageComponent,
    // HeaderComponent,
    ArticleIntroComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    AngularFireLite.forRoot(firebaseConfig),
    MailerSignupModule,
    HeaderModule,
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
