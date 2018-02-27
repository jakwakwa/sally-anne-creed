import { Component, OnInit } from '@angular/core';

import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit {

  blogsData: any = [];
  recipeData: any = [];
  courseData: any = [];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    // Data for Blogs
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

      console.log('Blog Data', content);
      this.blogsData = Object.keys(content).map(key => content[key]);

    });
    // Data for Recipes
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

      console.log('Recipe', content);
      this.recipeData = Object.keys(content).map(key => content[key]);

    });
    // Data for Courses
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

      // console.log('recipes', content);
      this.courseData = Object.keys(content).map(key => content[key]);

    });
  }

}
