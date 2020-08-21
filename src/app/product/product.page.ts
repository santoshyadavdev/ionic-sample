import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {

  constructor(private productService: ProductService) { }

  products$ = this.productService.products$;

}
