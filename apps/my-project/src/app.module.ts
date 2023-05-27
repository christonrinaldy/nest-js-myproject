import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresController } from './store/controllers/stores.controller';
import { StoreService } from './store/providers/store';
@Module({
  imports: [],
  controllers: [AppController, StoresController],
  providers: [AppService, StoreService],
})
export class AppModule {}
