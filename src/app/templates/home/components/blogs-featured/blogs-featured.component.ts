import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogs-featured',
  templateUrl: 'blogs-featured.component.html',
  styleUrls: ['blogs-featured.component.scss']
})
export class BlogsFeaturedComponent {
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
