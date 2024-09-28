import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  private apiUrl = environment.userLoginApi;

  constructor(private http: HttpClient) { }
  ngOnInit(): void { }
  loginUser(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, {email, password }, { headers });
  }
}