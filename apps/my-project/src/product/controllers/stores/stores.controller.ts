import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStoreDto } from '../../dto/store/index-store.dto';

@Controller('stores')
export class StoresController {
    @Get('/')
    getProducts() {
        
    }

    @Post()
    createStore(@Body() createStoreDto: CreateStoreDto) {
        return 'Success added new Store'
    }
}
