import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }

  onSubmit() {
    if (this.registrationForm.valid) {
      const name = this.name?.value;
      const email = this.email?.value;
      const password = this.password?.value;

      this.registerService.registerUser(name, email, password).pipe(
        tap(response => {
          console.log('Response from API:', response);
          localStorage.setItem("authToken", response.user.access_token);
          this.authService.setLoginStatus(true);
          this.router.navigate(['/profile']);
        }),
        catchError(error => {
          console.error('Error occurred:', error);
          return [];
        })
      ).subscribe();
    }
  }
}