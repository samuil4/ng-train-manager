import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Add firebase databse module
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [CommonModule, AngularFireDatabaseModule],
  declarations: [],
})
export class SharedModule {}
