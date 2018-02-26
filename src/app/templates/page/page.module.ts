import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PageComponent } from './container/page.component';
// components
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})

export class PageModule {}
