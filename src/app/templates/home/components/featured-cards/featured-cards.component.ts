import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-cards',
  templateUrl: 'featured-cards.component.html',
  styleUrls: ['featured-cards.component.scss']
})
export class FeaturedCardsComponent {
  // GET|SET event
  private _content: any;
  get content(): any {
      return this._content;
  }
  // SET event
  @Input()
  set content(value: any) {
      this._content = value;
  }
  // Type for routing purposes
  @Input()
  type;
}
