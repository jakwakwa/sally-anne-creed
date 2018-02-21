import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  // GET|SET event
  private _about: any;
  get about(): any {
      return this._about;
  }
  @Input()
  set about(value: any) {
      this._about = value;
  }

  constructor() {}

}
