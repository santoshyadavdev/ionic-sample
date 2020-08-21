import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$: Observable<Product[]> = of([
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
    {
      id: 1, brand: 'Tata', category: 'Apparels', name: 'product1', price: 1200,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41LuJbLFZzL.jpg'
    },
  ]);

}
