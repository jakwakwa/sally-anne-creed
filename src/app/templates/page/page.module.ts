import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PageComponent } from './container/page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})

export class PageModule {}
