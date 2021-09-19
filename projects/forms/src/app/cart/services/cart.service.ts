import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, Product } from '../model/cart.model';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems() {
    return this.http.get<Item[]>('/api/cart');
  }

  getproducts() {
    return this.http.get<Product[]>('/api/products');
  }

}
