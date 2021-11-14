import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody: any) {
    const baseUrl = 'http://localhost:3000/product';
    return this.httpClient.post(baseUrl, productBody);
  }

  viewProduct(productId: number) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get(baseUrl);
  }

  updateProduct(productId: number, productBody: any) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.put(baseUrl, productBody);
  }

  deleteProduct(productId: number) {
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
