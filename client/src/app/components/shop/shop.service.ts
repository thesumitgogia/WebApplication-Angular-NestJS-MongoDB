import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ShopService implements OnInit {
    // private apiUrl = environment.productsApi;

    constructor(private http: HttpClient) { }
    ngOnInit(): void { }
    getProducts(): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get<any>("http://localhost:3000/api/products/get", { headers });
    }
}