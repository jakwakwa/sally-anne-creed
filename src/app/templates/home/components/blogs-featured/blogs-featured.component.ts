import { Component, Input } from '@angular/core';
import { Featured } from '../../models/featured.interface';

@Component({
  selector: 'app-blogs-featured',
  templateUrl: 'blogs-featured.component.html',
  styleUrls: ['blogs-featured.component.scss']
})

export class BlogsFeaturedComponent {
  // GET event
  private _content: Array<Featured>;
  get content(): Array<Featured> {
      return this._content;
  }
  // SET event
  @Input()
  set content(value: Array<Featured>) {
      this._content = value;
  }

  @Input()
  type;
}
