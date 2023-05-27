import { Injectable } from '@nestjs/common';
import {Store} from '../interfaces/store.interface'
@Injectable()
export class StoreService {
    private storesArray : Store [] = []
    private lastId : number = 0;

    findAll() : Store[] {
        return this.storesArray;
    }

    findOne(id: Number) : Store {
        const foundStore = this.storesArray.find((s) => {
            s.id === id
        })
        return foundStore
    }

    getLastId() : number {
        return this.lastId;
    }

    create(store : Store) {
        this.storesArray.push(store)
        return;
    }

    update(id)
}
