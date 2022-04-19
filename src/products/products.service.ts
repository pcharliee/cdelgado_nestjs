import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  create(product: Product) {
    let id = this.products.length ? this.products.length + 1 : 1;
    let newProduct = Object.assign(product, { id: id });
    this.products.push(newProduct);
  }
  getProducts(): Product[] {
    return this.products;
  }
  deleteProduct(id: any): Product[] {
    this.products = this.products.filter(function (product) { return product.id != id.id; });
    return this.products; 
  }
}
