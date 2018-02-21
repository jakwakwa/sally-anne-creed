import { Injectable } from '@angular/core';
import * as flamelink from 'flamelink';
import { AngularFireLiteApp } from 'angularfire-lite';

@Injectable()
export class HomeService {

  // GET|SET _flApp
  private _flApp: any = {};
  get flApp(): any {
      return this._flApp;
  }
  set flApp(value: any) {
      this._flApp = value;
  }

  constructor(private _fa: AngularFireLiteApp) {
    // console.log(_fa.instance());

    this.flApp = flamelink({
      firebaseApp: _fa.instance(),
      env: 'production',
      locale: 'en-US'
    });
  }

  getApp() {
    return this.flApp;
    // this._flApp.content.get('terms')
    //   .then(data => console.log(data));
  }
}
