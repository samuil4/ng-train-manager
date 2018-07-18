import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AuthFormComponent } from '@app/auth-shared/components/auth-form/auth-form.component';

// Guards
import { AuthGuard } from '@app/auth-shared/guards/auth.guard';
import { LoggedInGuard } from '@app/auth-shared/guards/logged-in.guard';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  providers: [AuthGuard, LoggedInGuard],
})
export class SharedModule {}
