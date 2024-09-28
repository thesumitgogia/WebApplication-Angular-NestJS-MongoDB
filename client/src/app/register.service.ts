import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  private apiUrl = environment.userRegisterApi;

  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  // Method to get data
  registerUser(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, { name, email, password }, { headers });
  }

}