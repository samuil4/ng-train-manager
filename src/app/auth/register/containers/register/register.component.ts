import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  async initiateRegister(form: FormGroup) {
    console.log(form);
    const { email, password } = form.value;

    try {
      await this.authService.createUser(email, password);
      //
    } catch (error) {
      // Catcfh error and handle error message
      console.log(error.message);
      this.errorMessage = error.message;
    }
  }
}
