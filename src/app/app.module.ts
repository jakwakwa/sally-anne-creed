import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// Custom Modules:
import { HomeModule } from './templates/home/home.module';
import { PageModule } from './templates/page/page.module';
import { ArticleModule } from './templates/article/article.module';
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
// Routing
import { HomeComponent } from './templates/home/container/home.component';
import { PageComponent } from './templates/page/container/page.component';
import { NotFoundComponent } from './not-found.component';
import { ArticleComponent } from './templates/article/container/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'page/:type', component: PageComponent, pathMatch: 'full' },
  { path: 'page/:type/:id', component: ArticleComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    Ng2PageScrollModule,
    // Custom Modules
    HomeModule,
    PageModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
