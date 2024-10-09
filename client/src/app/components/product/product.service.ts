import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addToCart(productId: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    console.log("User Token: ", token);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const body = { productId: productId};
    return this.http.post(`http://localhost:3000/api/cart/add`, body , { headers });
  }
}
