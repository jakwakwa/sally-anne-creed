import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-intro',
  templateUrl: 'article-intro.component.html',
  styleUrls: ['article-intro.component.scss']
})

export class ArticleIntroComponent {

  p: number = 1;

  // GET|SET for content data
  private _content: any;
  get content(): any {
      return this._content;
  }
  @Input()
  set content(value: any) {
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
      console.log(value);
  }
}
