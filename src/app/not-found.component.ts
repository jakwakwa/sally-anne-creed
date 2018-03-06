import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>Not Found!</div>
  `,
  styles: [`
    div {
      color: white;
      font-size: 36px;
      text-transform: uppercase;
      font-weight: 800;
      background: #b91432;
      padding: 90px;
      padding-top: 40px;
    }
  `]
})
export class NotFoundComponent {}
