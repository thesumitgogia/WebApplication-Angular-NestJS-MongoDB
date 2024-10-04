import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }
  faUser: any = faUser;
  userLogin: boolean = false;
  ngOnInit(): void {
    // this.isUserLogin();
    this.authService.getLoginStatus().subscribe((status: boolean) => {
      this.userLogin = status;
      console.log('User login status updated in navbar:', this.userLogin);
    });
  }
  isUserLogin(): void {
    this.userLogin = this.authService.hasToken();
  }
}
