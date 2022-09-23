import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonsService } from './app.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  // get all the pokemons
  @Get()
  async findAll(): Promise<any> {
    return this.pokemonsService.findAll();
  }

  // get a pokemon by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.pokemonsService.findOne(id);
  }
}
