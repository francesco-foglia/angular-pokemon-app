import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[];
  allPokemons: any[];

  constructor() {
    this.results = [
      {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
      {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
      {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
      {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
      {name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/'},
      {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'},
      {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/'},
      {name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/'},
      {name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/'}
    ];
  }

  ngOnInit(): void {
    // find All pokemons
  }

}
