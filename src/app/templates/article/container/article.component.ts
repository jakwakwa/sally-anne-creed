import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from '../article.service';

import { ArticleContent } from '../../article/models/article.interface';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss']
})
export class ArticleComponent {

  articleId: number;
  pageType: string;

  // initializer for data object
  data: ArticleContent;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.route.params.subscribe( params => {

      this.pageType = params.type;
      this.articleId = params.id;

      if (this.pageType.toLowerCase() === 'blog') {
        this.articleService.getApp().content.subscribe('blog',
        {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }
        , (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = content[this.articleId];
          window.scrollTo(0, 0);
        });

      } else if (this.pageType.toLowerCase() === 'courses') {
        this.articleService.getApp().content.subscribe('courses',
        {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }
        , (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = content[this.articleId];
          window.scrollTo(0, 0);
        });

      } else if (this.pageType.toLowerCase() === 'recipes') {
        this.articleService.getApp().content.subscribe('recipes',
        {
          populate: [
            { field: 'category' },
            { field: 'mainImg' }
          ]
        }
        , (error, content) => {
          if (error) {
            console.error(error);
          }
          this.data = content[this.articleId];
          window.scrollTo(0, 0);
          // $("window").animate({ scrollTop: 0 }, 1000);
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
