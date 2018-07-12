import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  @Output()
  executeAuth: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get emailInvalid(): boolean {
    const field = this.form.get('email');
    return field.hasError('email') && field.touched;
  }

  get passwordInvalid(): boolean {
    const field = this.form.get('password');
    return field.hasError('required') && field.touched;
  }

  submitForm() {
    if (this.form.valid) {
      this.executeAuth.emit(this.form);
    }
  }
}
