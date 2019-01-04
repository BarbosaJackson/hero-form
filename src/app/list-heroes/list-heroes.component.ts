import { Component, OnInit } from '@angular/core';
import {HeroModel} from "../hero.model";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  heroes: HeroModel[];
  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
  }

}
