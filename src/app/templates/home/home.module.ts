import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { HomeComponent } from './container/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgxCarouselModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
