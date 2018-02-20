import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';

// containers
import { HomeComponent } from './container/home.component';

// components
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';

// service
import { HomeService } from './home.service';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    AboutComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    NgxCarouselModule,
    AngularFireLite.forRoot(firebaseConfig)
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {}
