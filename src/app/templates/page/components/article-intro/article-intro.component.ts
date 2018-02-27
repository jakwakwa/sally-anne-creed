import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-intro',
  templateUrl: 'article-intro.component.html',
  styleUrls: ['article-intro.component.scss']
})

export class ArticleIntroComponent {
    // GET|SET event
    private _content: any;
    get content(): any {
        return this._content;
    }
    @Input()
    set content(value: any) {
        this._content = value;
    }
}
