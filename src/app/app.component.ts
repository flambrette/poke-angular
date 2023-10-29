import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root', //id du composant
  templateUrl: 'app.component.html'
  //template: `<h1>Pokemon list !</h1>` //direct ou templateurl pour fichier html
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon :Pokemon) {
    /* previous way to do it with id as parameter
    const index :number = Number(pokemonId);
    const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == index);

    if (pokemon) {
      console.log(`you have clicked on ${pokemon.name}`);
    } else {
      console.log(`Pokemon doesn't exist with id ${index}`);
    }*/
    console.log(`you have clicked on ${pokemon.name}`);
    this.pokemonSelected = pokemon;
  }
}
