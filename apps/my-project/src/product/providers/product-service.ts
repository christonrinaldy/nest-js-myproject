import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  private productsArray: Product[] = [{ name: 'Siomay', id: 1, storeId: 1 }];
  private lastProductId = 1;

  getLastProductId() {
    return this.lastProductId;
  }

  // commit -1

  getAll(): Product[] {
    return this.productsArray;
  }

  getProductById(productId: number): Product {
    return this.productsArray.find((v) => v.id == productId);
  }

  // commit -2

  getProductsByStoreId(storeId: number): Product[] {
    return this.productsArray.filter((p) => {
      return p.storeId == storeId;
    });
  }

  addProduct(product: Product) {
    this.productsArray.push(product);
    this.lastProductId = this.lastProductId + 1;
    return;
  }

  updateProduct(product: Product) {
    this.productsArray.forEach((p, i) => {
      if (p.id == product.id && p.storeId == product.storeId) {
        this.productsArray[i] = product;
        return;
      }
    });
    return;
  }

  deleteProduct(productId: number) {
    this.productsArray.forEach((p, i) => {
      if (p.id == productId) {
        this.productsArray.splice(i);
        return;
      }
    });
    return false;
  }
}
