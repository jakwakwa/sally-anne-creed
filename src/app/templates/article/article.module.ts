import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';
// service
import { ArticleService } from './article.service';
// containers
import { ArticleComponent } from './container/article.component';
// components
import { ArticleViewComponent } from './components/article-view/article-view.component';
// reusable component modules
import { HeaderModule } from '../../components/header/header.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { MailerSignupModule } from '../../components/mailer-signup/mailer-signup.module';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    AngularFireLite.forRoot(firebaseConfig),
    MailerSignupModule,
    HeaderModule,
    SidebarModule
  ],
  exports: [
    ArticleComponent
  ],
  providers: [ forwardRef( () => ArticleService ) ]
})

export class ArticleModule {}
