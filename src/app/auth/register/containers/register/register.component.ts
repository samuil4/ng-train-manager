import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async initiateRegister(form: FormGroup) {
    console.log(form);
    const { email, password } = form.value;

    try {
      await this.authService.createUser(email, password);
      // Go to login
      this.router.navigate(['/', 'auth', 'login']);
    } catch (error) {
      // Catcfh error and handle error message
      this.errorMessage = error.message;
    }
  }
}
