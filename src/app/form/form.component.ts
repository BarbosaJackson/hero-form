import { Component, OnInit } from '@angular/core';
import {HeroModel} from "../hero.model";

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
  constructor() {
    this.defaultName = "--------";
    this.defaultAlterEgo = '----------';
    this.addnewpower = true;
  }

  addPower(power: string){
    this.defaultPowers.push(power);
    this.addnewpower = !this.addnewpower;
  }

  addNewPower(){
    this.addnewpower = !this.addnewpower;
  }

  resetField(id: string) {
    if(id == "name" && this.defaultName == '--------') {
      this.defaultName = "";
    } else if(id == 'alterEgo' && this.defaultAlterEgo == '----------') {
      this.defaultAlterEgo = "";
    }
  }

  onSubmit(name: string, alterEgo: string, power: string) {
    alert(power);
  }

  ngOnInit() {
  }

}
