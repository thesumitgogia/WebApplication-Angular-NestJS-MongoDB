import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  test() {
    // const response = { user: { access_token: 'your-access-token' } }; // Replace with actual response data
    const myHeaders = new Headers();
    // console.log("Access Token:", response.user.access_token);
    // myHeaders.set("Authorization", `Bearer ${response.user.access_token}`);
    console.log("Authorization Header:", myHeaders.get("Authorization"));
  }
  // test();
}
