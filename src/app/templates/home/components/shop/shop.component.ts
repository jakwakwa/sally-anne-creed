import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { ShopProduct } from '../../models/shop.interface';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.scss']
})
export class ShopComponent implements OnInit {

  // GET|SET event
  private _content: Array<ShopProduct>;
  get content(): Array<ShopProduct> {
      return this._content;
  }
  @Input()
  set content(value: Array<ShopProduct>) {
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
