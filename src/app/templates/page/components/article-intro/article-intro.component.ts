import { Component, Input } from '@angular/core';
import { ArticleContent } from '../../models/articles.interface';

@Component({
  selector: 'app-article-intro',
  templateUrl: 'article-intro.component.html',
  styleUrls: ['article-intro.component.scss']
})

export class ArticleIntroComponent {

  // GET|SET for content data
  private _content: ArticleContent;
  get content(): ArticleContent {
    return this._content;
  }

  @Input()
  set content(value: ArticleContent) {
    this._content = value;
  }
  // GET/SET for types
  private _type: string;
  get type(): string {
    return this._type;
  }

  @Input()
  set type(value: string) {
    this._type = value;
  }
}
