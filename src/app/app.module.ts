import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// Custom
import { HomeModule } from './templates/home/home.module';
import { PageModule } from './templates/page/page.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';


// Routing
import { HomeComponent } from './templates/home/container/home.component';
import { PageComponent } from './templates/page/container/page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: PageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    Ng2PageScrollModule,
    // Custom Modules
    HomeModule,
    PageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
