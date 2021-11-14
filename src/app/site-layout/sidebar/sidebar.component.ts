import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/products/category';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data => {
      // Array copy
      this.categoryList = JSON.parse(JSON.stringify(data));;
    });
  }
}
