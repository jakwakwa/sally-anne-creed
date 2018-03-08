import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from '../article.service';
import { ArticleContent } from '../../article/models/article.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss']
})

export class ArticleComponent {

  // used for Routing
  articleId: number;
  pageType: string;
  // initializer for data object
  data: ArticleContent;
  // for sidebar categories
  categories: Array<any> = [];
  // for... latest posts
  sortedDate: Array<any> = [];

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService ) {

    this.route.params.subscribe( params => {

      this.pageType = params.type;
      this.articleId = params.id;

      if (this.pageType.toLowerCase() === 'blog') {

        this.articleService.getApp().content.subscribe('blog', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }, (error, content) => {
          if (error) {
            console.error(error);
          }
          // get data for the article with id that relates to param id
          this.data = content[this.articleId];
          // get sorteddata as array of objects first
          this.sortedDate = Object.keys(content).map(key => content[key]).slice(1);
          // then, sort by Latest Post
          this.sortedDate.sort((a, b) => new Date(b.__meta__.createdDate).getTime() - new Date(a.__meta__.createdDate).getTime());
          // after read more is clicked page will scroll to top of the article
          $("html, body").animate({scrollTop:530}, 500);
        });
        // fetch Categories for Blogs
        this.articleService.getApp().content.subscribe('blogCategories', (error, content) => {
          if (error) {
            console.error(error);
          }
          this.categories = Object.keys(content).map(key => content[key]);
        });

      } else if (this.pageType.toLowerCase() === 'courses') {

        this.articleService.getApp().content.subscribe('courses', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }, (error, content) => {
          if (error) {
            console.error(error);
          }
          // get data for the article with id that relates to param id
          this.data = content[this.articleId];
          // get sorteddata as array of objects first
          this.sortedDate = Object.keys(content).map(key => content[key]).slice(1);
          // then, sort by Latest Post
          this.sortedDate.sort((a, b) => new Date(b.__meta__.createdDate).getTime() - new Date(a.__meta__.createdDate).getTime());
          // after read more is clicked page will scroll to top of the article
          $("html, body").animate({scrollTop:530}, 500);
        });
        // fetch Categories for Courses
        this.articleService.getApp().content.subscribe('courseCategories', (error, content) => {
          if (error) {
            console.error(error);
          }
          this.categories = Object.keys(content).map(key => content[key]);
        });

      } else if (this.pageType.toLowerCase() === 'recipes') {

        this.articleService.getApp().content.subscribe('recipes', {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }, (error, content) => {
          if (error) {
            console.error(error);
          }
          // get data for the article with id that relates to param id
          this.data = content[this.articleId];
          // get sorteddata as array of objects first
          this.sortedDate = Object.keys(content).map(key => content[key]).slice(1);
          // then, sort by Latest Post
          this.sortedDate.sort((a, b) => new Date(b.__meta__.createdDate).getTime() - new Date(a.__meta__.createdDate).getTime());
          // after read more is clicked page will scroll to top of the article
          $("html, body").animate({scrollTop:530}, 500);
        });
        // fetch Categories for Recipes
        this.articleService.getApp().content.subscribe('recipeCategories', (error, content) => {
          if (error) {
            console.error(error);
          }
          this.categories = Object.keys(content).map(key => content[key]);
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
