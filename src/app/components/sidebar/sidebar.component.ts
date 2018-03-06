import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent {

  // GET|SET event
  private _list: any;
  get list(): any {
      return this._list;
  }

  @Input()
  set list(value: any) {
      this._list = value;
  }

  // constructor() {
  //   this.list = {}
  // }
}
