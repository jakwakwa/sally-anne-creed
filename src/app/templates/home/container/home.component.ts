import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getApp().content.subscribe('home', {
      populate: [
        {
          field: 'homeSlider',
          subFields: [ 'slideImage' ]
        },
        {
          field: 'aboutProfileImg'
        },
        {
          field: 'aboutFbIcon'
        },
        {
          field: 'aboutTwitterIcon'
        },
        {
          field: 'aboutInstgramIcon'
        },
        {
          field: 'aboutLogo'
        }
      ]
    }, (error, content) => {
      if (error) {
        console.error(error);
      }

      console.log('home', content);
      this.data = content;

    });
  }

}
