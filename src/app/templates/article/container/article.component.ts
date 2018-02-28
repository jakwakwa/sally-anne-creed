import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss']
})
export class ArticleComponent {

  articleId;
  pageType;
  // initializer for data object
  data: any = [];

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.route.params.subscribe( params => {

      this.pageType = params.type;
      this.articleId = params.id;

      // return console.log('Params', params.id )

        console.log(this.articleId);
        console.log('page type', this.pageType);
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
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
