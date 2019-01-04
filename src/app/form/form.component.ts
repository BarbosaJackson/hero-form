import { Component, OnInit } from '@angular/core';
import {HeroModel} from "../hero.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  defaultName: string;
  defaultAlterEgo: string;
  defaultPowers = ['Cura', 'Super força', 'Super inteligencia', 'Super flexibilidade', 'Calor solar'];
  addnewpower: boolean;
  defaultNames: string[] = ["Batman", "superman", "Coringa", "Flash", "Arrow"];
  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) {

    this.defaultName = this.defaultNames[(Math.floor((Math.random() * 100) * Math.ceil(Math.random() * 100) * 73 * 13 * 23 * 123 + (Math.random() * 100)) % 5)];
    this.defaultAlterEgo = '';
    this.addnewpower = true;
  }

  addPower(power: string){
    this.defaultPowers.push(power);
    this.addnewpower = !this.addnewpower;
  }

  addNewPower(){
    this.addnewpower = !this.addnewpower;
  }

  onSubmit(name: string, alterEgo: string, power: string) {
    this.heroService.addHero(new HeroModel(name, power, alterEgo));
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }
}
