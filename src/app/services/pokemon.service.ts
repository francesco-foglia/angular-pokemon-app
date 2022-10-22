import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[];

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  findAll() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .subscribe((response: any) => this.pokemons = response.results);
  }
}
