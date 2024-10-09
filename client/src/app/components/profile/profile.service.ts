import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ProfileService implements OnInit {
    private apiUrl = environment.userProfileApiClient;

    constructor(private http: HttpClient) { }
    ngOnInit(): void { }
    profileAuth(): Observable<any> {
        const token = localStorage.getItem('authToken');
        console.log("User Token: ", token);
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        const body = { /* your request body */ };
        return this.http.get(this.apiUrl, { headers });
    }
}