import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonsService {
  constructor(private readonly httpService: HttpService) {}
  //get all pokemons
  findAll(): Observable<AxiosResponse<any[]>> {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .pipe(map((res) => res.data));
  }
  // get pokemon by id
  findOne(param): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${param}`)
      .pipe(map((res) => res.data));
  }
}
