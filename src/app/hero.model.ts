export class HeroModel {
  name:string;
  power:string;
  alterEgo: string;

  constructor(name: string, power: string, alterEgo: string) {
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
  }
}
