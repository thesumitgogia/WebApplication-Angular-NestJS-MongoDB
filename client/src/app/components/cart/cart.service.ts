import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {

  }

  addToCart(productId: string, userId: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    // console.log("User Token: ", token);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    // const body = { /* your request body */ };
    return this.http.get(`http://localhost:3000/api/cart/get`, { headers });
  }

  removeFromCart(cartId: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    // console.log("User Token: ", token);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const body = { cartId: cartId };
    return this.http.delete(`http://localhost:3000/api/cart/remove/${cartId}`, { headers });
  }
}
