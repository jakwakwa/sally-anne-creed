import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  showSpinner: boolean = true;
  // gets used in parameterised routing
  blogType: string = 'blog';
  recipeType: string = 'recipes';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) { }

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
      this.data = content;
      this.homeService.getApp().content.subscribe( () => this.showSpinner = false )
    });

    this.homeService.getApp().content.subscribe('recipes', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        { field: 'mainImg' }
      ]
    }, (error, content) => {
      if (error) {
        console.error(error);
    }
      this.recipeData = Object.keys(content).map(key => content[key]);
    });

    this.homeService.getApp().content.subscribe('blog', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        { field: 'mainImg' }
      ]
    }, (error, content) => {
      if (error) {
        console.error(error);
    }
    this.blogsData = Object.keys(content).map(key => content[key]);
    });

    this.homeService.getApp().content.subscribe('courses', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        { field: 'mainImg' }
      ]
    }, (error, content) => {
      if (error) {
        console.error(error);
    }
    this.courseData = Object.keys(content).map(key => content[key]);
    });
  }
}
