import { Injectable } from '@angular/core';
import {HeroModel} from "./hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: HeroModel[] = [];
  constructor(private heroService: HeroService) { }

  addHero(hero: HeroModel) {
    this.heroes.push(hero);
  }
  getHeroes(): HeroModel[] {
    return this.heroes;
  }

}
