import { Component } from '@angular/core';
import {HeroModel} from "./hero.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-form';
  hero: HeroModel[];
}
