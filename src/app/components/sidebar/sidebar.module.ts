import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})

export class SidebarModule {}
