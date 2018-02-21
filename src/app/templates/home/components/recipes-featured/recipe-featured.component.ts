import { Component, Input } from '@angular/core';
import { RecipeFeatured } from '../../models/recipe-featured.interface';

@Component({
  selector: 'app-recipe-featured',
  templateUrl: 'recipe-featured.component.html',
  styleUrls: ['recipe-featured.component.scss']
})
export class RecipeFeaturedComponent {

  // GET|SET event
  private _recipes: Array<RecipeFeatured>;
  get recipes(): Array<RecipeFeatured> {
      return this._recipes;
  }
  @Input()
  set recipes(value: Array<RecipeFeatured>) {
      this._recipes = value;
  }

}
