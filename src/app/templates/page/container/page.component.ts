import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit {
  pageType;

  data: any = [];
  // recipeData: any = [];
  // courseData: any = [];

  constructor(
    // new router stuff
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
  ) {
    this.route.params.subscribe( params => {
      console.log('Router Params', params);
      this.pageType = params.type;

      if (this.pageType.toLowerCase() === 'blog') {
        this.pageService.getApp().content.subscribe('blog', {
          populate: [
            {
              field: 'category'
            },
            {
              field: 'mainImg'
            }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }

          // console.log('Blog Data', content);
          this.data = Object.keys(content).map(key => content[key]);

        });
      } else if (this.pageType.toLowerCase() === 'recipes') {
        this.pageService.getApp().content.subscribe('recipes', {
          populate: [
            {
              field: 'category'
            },
            {
              field: 'mainImg'
            }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }

          console.log('Recipe Data', content);
          this.data = Object.keys(content).map(key => content[key]);

        });
      } else if (this.pageType.toLowerCase() === 'courses') {
        this.pageService.getApp().content.subscribe('courses', {
          populate: [
            {
              field: 'category'
            },
            {
              field: 'mainImg'
            }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }

          console.log('Courses', content);
          this.data = Object.keys(content).map(key => content[key]);

        });
      } else {
        this.router.navigate(['/']);
      }

    } );
  }

  ngOnInit() {

  }

}
