import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  // email: any;
  // password: any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;

      this.loginService.loginUser(email, password).pipe(
        tap(response => {
          console.log('Response from API:', response);
          // --------------------Testing----------Stroing Token in Header----------

          // const myHeaders = new Headers();
          // myHeaders.append("Authorization", "Bearer");
          localStorage.setItem("authToken", response.user.access_token);
          this.router.navigate(['/profile']);
          this.authService.setLoginStatus(true); // Update the login status in the service

          // myHeaders.set("Authorization", `Bearer ${response.user.access_token}`);
          // console.log(myHeaders.get("Authorization"));


          // --------------------Testing----------Stroing Token in Header----------
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return [];
        })
      ).subscribe();
    }
  }
}
