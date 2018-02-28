import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// imports for services (from firebase)
import { firebaseConfig } from '../../app.firebase.config';
import { AngularFireLite } from 'angularfire-lite';

// containers
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireLite.forRoot(firebaseConfig)
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {}
