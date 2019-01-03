export class HeroModel {
  name:string;
  power:string;
  strong: number;
  alterEgo: string;

  constructor(name: string, power: string, strong: number, alterEgo: string) {
    this.name = name;
    this.power = power;
    this.strong = strong;
    this.alterEgo = alterEgo;
  }
}
