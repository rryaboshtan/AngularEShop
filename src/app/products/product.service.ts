import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product';
    return this.httpClient.post<Product>(baseUrl, productBody);
  }

  viewProduct(productId: string): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get<Product>(baseUrl);
  }

  updateProduct(productId: string, productBody: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }

  deleteProduct(productId: string): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.delete<Product>(baseUrl);
  }

  searchProductByCategory(categoryId: number): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product/category=' + categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }

  searchProductByDate(dateParam: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/product/date=' + dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(): Observable<Category> {
    const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }
}
