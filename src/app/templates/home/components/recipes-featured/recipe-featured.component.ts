import { Component, Input } from '@angular/core';
import { Featured } from '../../models/featured.interface';

@Component({
  selector: 'app-recipe-featured',
  templateUrl: 'recipe-featured.component.html',
  styleUrls: ['recipe-featured.component.scss']
})
export class RecipeFeaturedComponent {
  // GET|SET event
  private _content: Array<Featured>;
  get content(): Array<Featured> {
      return this._content;
  }
  @Input()
  set content(value: Array<Featured>) {
      this._content = value;
  }

  @Input()
  type;

}
