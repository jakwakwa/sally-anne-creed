import { Component, Input } from '@angular/core';
import { Featured } from '../../models/featured.interface';

@Component({
  selector: 'app-recipe-featured',
  templateUrl: 'recipe-featured.component.html',
  styleUrls: ['recipe-featured.component.scss']
})

export class RecipeFeaturedComponent {
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
  // Type for Routing purposes
  @Input()
  type;

}
