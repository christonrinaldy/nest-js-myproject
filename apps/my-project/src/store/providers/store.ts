import { Injectable } from '@nestjs/common';
import { Store } from '../interfaces/store.interface';
@Injectable()
export class StoreService {
  private storesArray: Store[] = [{ id: 1, name: 'Toko Siomay' }];
  private lastId = 1;

  findAll(): Store[] {
    return this.storesArray;
  }

  findOne(id: number): Store {
    const foundStore = this.storesArray.find((s) => {
      return s.id == id;
    });
    return foundStore;
  }

  getLastId(): number {
    return this.lastId;
  }

  create(store: Store) {
    this.storesArray.push(store);
    return;
  }

  update(store: Store) {
    this.storesArray.forEach((s, i) => {
      if (s.id == store.id) {
        this.storesArray[i] = store;
        return;
      }
    });
    return;
  }

  deleteOne(storeId) {
    this.storesArray.forEach((e, i) => {
      if (e.id == storeId) {
        this.storesArray.splice(i);
        return;
      }
    });
  }
}
