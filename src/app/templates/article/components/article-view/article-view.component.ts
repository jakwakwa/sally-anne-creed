import { Component, Input } from '@angular/core';
import { ArticleContent } from '../../models/article.interface';

@Component({
  selector: 'app-article-view',
  templateUrl: 'article-view.component.html',
  styleUrls: ['article-view.component.scss']
})
export class ArticleViewComponent {
  // GET|SET for content data
  private _content: ArticleContent;
  get content(): ArticleContent {
      return this._content;
  }
  @Input()
  set content(value: ArticleContent) {
      this._content = value;
  }
}
