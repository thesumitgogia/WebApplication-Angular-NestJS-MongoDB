import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
      
  }
  getProducts(productId: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`http://localhost:3000/api/products/${productId}`, { headers });
  }
}
