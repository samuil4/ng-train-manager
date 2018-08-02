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

const initializeFireBaseModule = AngularFireModule.initializeApp(
  FIREBASE_CONFIG,
);

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    // Custom modules
    SharedModule,
    // Firebase
    initializeFireBaseModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [],
})
export class AuthModule {}
