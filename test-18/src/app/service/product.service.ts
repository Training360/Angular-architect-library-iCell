import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient);

  apiUrl = 'https://nettuts.hu/jms/joe/products';

  list$ = new BehaviorSubject<Product[]>([]);

  selected$ = new BehaviorSubject<Product>( new Product() );

  constructor() { }

  load(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe(
      list => this.list$.next(list)
    );
  }

  select(id: number): void {
    this.http.get<Product>(`${this.apiUrl}/${id}`).subscribe(
      product => this.selected$.next(product)
    );
  }
  
  update(product: Product): void {
    this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product).subscribe(
      updatedProduct => {
        const list = this.list$.getValue();
        const index = list.findIndex( p => p.id === product.id );
        list.splice(index, 1, updatedProduct)
        this.list$.next( list );
      }
    );
  }

  remove(id: number): void {
    this.http.delete<Product>(`${this.apiUrl}/${id}`).subscribe(
      _ => {
        const list = this.list$.getValue();
        const index = list.findIndex( p => p.id === id );
        list.splice(index, 1)
        this.list$.next( list );
      }
    );
  }

}
