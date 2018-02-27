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
  courseData: any = [];
  blogsData: any = [];

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
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        {
          field: 'mainImg'
        }
      ]
     }, (error, content) => {
      if (error) {
        console.error(error);
      }

      // console.log('recipes', content);
      this.recipeData = Object.keys(content).map(key => content[key]);

    });

    this.homeService.getApp().content.subscribe('blog', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        {
          field: 'mainImg'
        }
      ]
     }, (error, content) => {
      if (error) {
        console.error(error);
      }

      // console.log('recipes', content);
      this.blogsData = Object.keys(content).map(key => content[key]);

    });

    this.homeService.getApp().content.subscribe('courses', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        {
          field: 'mainImg'
        }
      ]
     }, (error, content) => {
      if (error) {
        console.error(error);
      }

      // console.log('recipes', content);
      this.courseData = Object.keys(content).map(key => content[key]);

    });
  }

}
