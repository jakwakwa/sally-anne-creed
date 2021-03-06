import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { Slider } from '../../models/slider.interface';

@Component({
  selector: 'app-home-slider',
  templateUrl: 'home-slider.component.html',
  styleUrls: ['home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  carouselBanner;

  // GET|SET event
  private _content: Array<Slider>;
  get content(): Array<Slider> {
      return this._content;
  }
  @Input()
  set content(value: Array<Slider>) {
      this._content = value;
  }

  ngOnInit(){

    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 1000,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            top: 615px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
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
