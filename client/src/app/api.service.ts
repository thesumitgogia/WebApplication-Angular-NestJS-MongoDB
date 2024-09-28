import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Example method to send form data to the backend
  sendFormData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
