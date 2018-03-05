import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-cards',
  templateUrl: 'featured-cards.component.html',
  styleUrls: ['featured-cards.component.scss']
})
export class FeaturedCardsComponent {

  p: number = 1;

  // GET|SET event
  private _content: any;
  get content(): any {
      return this._content;
  }
  @Input()
  set content(value: any) {
      this._content = value;
  }

  @Input()
  type;

}
