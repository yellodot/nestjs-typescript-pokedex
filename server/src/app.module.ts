import { Module } from '@nestjs/common';
import { PokemonsController } from './app.controller';
import { PokemonsService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
