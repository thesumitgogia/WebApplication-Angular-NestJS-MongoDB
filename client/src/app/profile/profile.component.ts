import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { catchError, tap } from 'rxjs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  error: string = '';
  faUser: any = faUser;
  userLogin: boolean = false;
  constructor(private profileService: ProfileService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    // this.fetchProfile();
    // this.isUserLogin();
    this.authService.getLoginStatus().subscribe((status: boolean) => {
      this.userLogin = status;
      console.log('User login status updated in navbar:', this.userLogin);
    });
    if (this.userLogin) {
      this.fetchProfile();
    } else {
      this.router.navigate(['/login']);
    }
  }

  userLogout(): void {
    if (confirm("Do you want to log out?")) {
      localStorage.removeItem('authToken');
      location.reload();
      this.router.navigate(['/login']);
    }
  }

  isUserLogin(): void {
    if (localStorage.getItem('authToken') == null || localStorage.getItem('authToken') == '') {
      this.router.navigate(['/login']);
      this.userLogin = false;
    } else {
      this.userLogin = true;
    }
  }
  fetchProfile(): void {
    this.profileService.profileAuth().pipe(
      tap(response => {
        console.log('Response from API:', response);
        this.profile = response
      }),
      catchError(error => {
        console.error('Error occurred:', error);
        this.error = 'Failed to load profile data.';
        return [];
      })
    ).subscribe();
  }
}