import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStoreDto } from '../dto/index-store.dto';
import { StoreService } from '../providers/store';
import { Store } from '../interfaces/store.interface';

@Controller('stores')
export class StoresController {
    constructor(private storeService : StoreService) {
        this.storeService = storeService;

    }

    @Get('/:id')
    getOneProduct(@Param() storeId: number) : Store {
        return this.storeService.findOne(storeId)
    }

    @Get('/')
    getProducts() {
        this.storeService.findAll();
    }

    @Post()
    createStore(@Body() createStoreDto: CreateStoreDto) {
        const lastId = this.storeService.getLastId();
        const payload = {
            id: lastId + 1,
            ...createStoreDto
        }
        this.storeService.create(payload);

        return 'Success added new Store'
    }

    @Put('/:id')
    updateStore(@Body() CreateStoreDto: CreateStoreDto, @Param() storeId: number) {
        const foundStore = this.storeService.findOne(storeId);
        if(foundStore) {
            
            return 'Success updated store'
        } else {
            return 'Failed updated store'
        }

    }
}
