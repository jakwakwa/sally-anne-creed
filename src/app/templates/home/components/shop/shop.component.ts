import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.scss']
})
export class ShopComponent implements OnInit {

  // GET|SET event
  private _content: any;
  get content(): any {
      return this._content;
  }
  @Input()
  set content(value: any) {
      this._content = value;
      // console.log('ShopSlider', this._content);
  }

  carouselBanner;

  ngOnInit(){

    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 1000,
      interval: 4000,
      point: {
        visible: false
      },
      load: 0,
      loop: false,
      touch: true
    }
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
  }
}
