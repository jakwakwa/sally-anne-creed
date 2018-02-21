import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-featured',
  templateUrl: 'recipe-featured.component.html',
  styleUrls: ['recipe-featured.component.scss']
})
export class RecipeFeaturedComponent {

  // GET|SET event
  private _recipes: any;
  get recipes(): any {
      return this._recipes;
  }
  @Input()
  set recipes(value: any) {
      this._recipes = value;
  }

}
