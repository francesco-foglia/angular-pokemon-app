import { Component } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results: any[];

  constructor(private pokemonService: PokemonService) {
  }

  submit(query: string): void {
    this.results = this.pokemonService.pokemons.filter((pokemon: any) => pokemon.name.includes(query.toLowerCase()));
  }
}
