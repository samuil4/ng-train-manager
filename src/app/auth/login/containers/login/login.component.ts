import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@app/auth-shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async initiateLogin(form: FormGroup) {
    const { email, password } = form.value;

    try {
      await this.authService.logInUser(email, password);
      // Go to logged in state
      this.router.navigate(['/']);
    } catch (error) {
      // Catcfh error and handle error message
      this.errorMessage = error.message;
    }
  }
}
