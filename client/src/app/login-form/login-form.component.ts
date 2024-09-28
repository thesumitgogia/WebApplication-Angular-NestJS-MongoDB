import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  // email: any;
  // password: any;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
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
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return [];
        })
      ).subscribe();
    }
  }
}
