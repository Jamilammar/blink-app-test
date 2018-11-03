import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokemonService]
})
export class AppComponent {
	mainTitle = "the Blink Test App!";
    pokemons = [];
    constructor( private pokemonService: PokemonService) {}

    term: any;
    date: Date;

    ngOnInit() {

   	this.date = new Date();
  	this.date.setDate(this.date.getDate());

    this.pokemonService.getPokemon()
    .subscribe(results => { 
         this.pokemons.push(results); 
    });
   }
}
