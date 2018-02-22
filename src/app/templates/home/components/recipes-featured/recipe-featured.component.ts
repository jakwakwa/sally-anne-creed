import { Component, Input } from '@angular/core';
import { RecipeFeatured } from '../../models/recipe-featured.interface';

@Component({
  selector: 'app-recipe-featured',
  templateUrl: 'recipe-featured.component.html',
  styleUrls: ['recipe-featured.component.scss']
})
export class RecipeFeaturedComponent {

  // GET|SET event
  private _content: Array<RecipeFeatured>;
  get content(): Array<RecipeFeatured> {
      return this._content;
  }
  @Input()
  set content(value: Array<RecipeFeatured>) {
      this._content = value;
  }

}
