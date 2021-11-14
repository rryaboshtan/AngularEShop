import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody: any) {
    const baseUrl = 'http://localhost:3000/product';
    return this.httpClient.post(baseUrl, productBody);
  }

  viewProduct(productId: string) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get(baseUrl);
  }

  updateProduct(productId: string, productBody: any) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.put(baseUrl, productBody);
  }

  deleteProduct(productId: string) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.delete(baseUrl);
  }

  searchProductByCategory(categoryId: number) {
    const baseUrl = 'http://localhost:3000/product/category=' + categoryId;
    return this.httpClient.get(baseUrl);
  }

  searchProductByDate(dateParam: any) {
    const baseUrl = 'http://localhost:3000/product/date=' + dateParam;
    return this.httpClient.get(baseUrl);
  }
}
