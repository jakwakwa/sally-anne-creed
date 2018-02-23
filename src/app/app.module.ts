import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// Custom
import { HomeModule } from './templates/home/home.module';
import { PageModule } from './templates/page/page.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

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
    Ng2PageScrollModule,
    // Custom Modules
    HomeModule,
    PageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
