import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: 'article-view.component.html',
  styleUrls: ['article-view.component.scss']
})
export class ArticleViewComponent {
  // GET|SET for content data
  private _content: any;
  get content(): any {
      return this._content;
  }
  @Input()
  set content(value: any) {
      this._content = value;
  }
}
