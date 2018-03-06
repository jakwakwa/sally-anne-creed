import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})

export class PageComponent {
  // gets used in parameterised routing
  pageType;
  // initializer for data object
  data: any = [];
  showSpinner: boolean = true;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService ) {

    this.route.params.subscribe( params => {

      this.pageType = params.type;

      if (this.pageType.toLowerCase() === 'blog') {

        this.pageService.getApp().content.subscribe('blog', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = Object.keys(content).map(key => content[key]);
          this.pageService.getApp().content.subscribe( () => this.showSpinner = false )
          $("html, body").animate({scrollTop:0}, 500);
        });

      } else if (this.pageType.toLowerCase() === 'recipes') {

        this.pageService.getApp().content.subscribe('recipes', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = Object.keys(content).map(key => content[key]);
          this.pageService.getApp().content.subscribe( () => this.showSpinner = false )
          $("html, body").animate({scrollTop:0}, 500);
        });

      } else if (this.pageType.toLowerCase() === 'courses') {

        this.pageService.getApp().content.subscribe('courses', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
         }, (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = Object.keys(content).map(key => content[key]);
          this.pageService.getApp().content.subscribe( () => this.showSpinner = false )
          $("html, body").animate({scrollTop:0}, 500);
        });

      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
