import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroResolver} from "./hero.resolver";
import { HomeComponent } from './home/home.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

const appRoutes: Routes = [
  {
    path: '',
    resolve: { heros: HeroResolver },
    children: [
      {path: 'form', component: FormComponent},
      {path: '', component: ListHeroesComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ListHeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [HeroResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
