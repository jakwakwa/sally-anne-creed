import { Component, Input } from '@angular/core';

// import model
import { AboutContent } from '../../models/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  // GET|SET event
  private _about: AboutContent;
  get about(): AboutContent {
      return this._about;
  }
  @Input()
  set about(value: AboutContent) {
      this._about = value;
      // console.log('About Content', this._about);
  }

  constructor() {
    this.about = {}
  }

}
