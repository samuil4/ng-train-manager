import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from '@env';

// Shared
import { SharedModule } from '@app/auth-shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    // Custom modules
    SharedModule,
    // Firebase
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [],
})
export class AuthModule {}
