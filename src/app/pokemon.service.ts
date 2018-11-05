import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService { 
theUrls = [];
  constructor(private http: Http) {} 

  getPokemon(): Observable<any> { 
  	return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=10').switchMap(data => {
	  var any = data.json();
	  for (var i = 0 ; i <= 9; i++) {
	  	this.theUrls.push(any.results[i].url)
	  }
	  return this.theUrls;
	}).flatMap((pokeUrl: string) => this.http.get(pokeUrl), 
      (_, resp) => resp.json()).catch(this.handleError);
  }

  private handleError(error: any) {
      return Observable.throw(error._body);
  }

}
