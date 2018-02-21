import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};
  recipeData: any = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getApp().content.subscribe('home', {
      populate: [
        {
          field: 'homeSlider',
          subFields: [ 'slideImage' ]
        },
        {
          field: 'shop',
          subFields: ['productImage']
        },
        {
          field: 'about',
          subFields: ['profileImg', 'facebookIcon', 'twitterIcon', 'instagramIcon', 'credentialLogo']
        }
      ]
    }, (error, content) => {
      if (error) {
        console.error(error);
      }

      // console.log('home', content);
      this.data = content;

    });

    this.homeService.getApp().content.subscribe('recipes', {
      orderByChild: 'recipeFeatured',
      equalTo: true,
      populate: [
        {
          field: 'recipeMainImg'
        }
      ]
     }, (error, content) => {
      if (error) {
        console.error(error);
      }

      // console.log('recipes', content);
      this.recipeData = Object.keys(content).map(key => content[key]);

    });
  }

}
