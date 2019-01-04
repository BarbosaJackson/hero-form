import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {HeroModel} from "../hero.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: HeroModel[];
  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
  }

}
