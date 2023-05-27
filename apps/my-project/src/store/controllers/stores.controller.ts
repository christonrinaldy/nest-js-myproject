import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStoreDto } from '../dto/index-store.dto';
import { StoreService } from '../providers/store';
import { GetOneParams, Store } from '../interfaces/store.interface';

@Controller('stores')
export class StoresController {
  constructor(private storeService: StoreService) {
    this.storeService = storeService;
  }

  @Get('/:storeId')
  getOneProduct(@Param() params: GetOneParams): Store {
    const { storeId } = params;
    return this.storeService.findOne(storeId);
  }

  @Get('/')
  getProducts() {
    return this.storeService.findAll();
  }

  @Post()
  createStore(@Body() createStoreDto: CreateStoreDto) {
    const lastId = this.storeService.getLastId();
    const payload = {
      id: lastId + 1,
      ...createStoreDto,
    };
    this.storeService.create(payload);

    return 'Success added new Store';
  }

  @Put('/:storeId')
  updateStore(
    @Body() createStoreDto: CreateStoreDto,
    @Param() params: GetOneParams,
  ) {
    const { storeId } = params;
    const foundStore = this.storeService.findOne(storeId);
    if (foundStore) {
      const payload = {
        ...foundStore,
        ...createStoreDto,
      };
      this.storeService.update(payload);
      return 'Success updated store';
    } else {
      return 'Failed updated store';
    }
  }

  @Delete('/:storeId')
  deleteStore(@Param() params: GetOneParams) {
    const { storeId } = params;

    this.storeService.deleteOne(storeId);

    return 'Success delete store';
  }
}
