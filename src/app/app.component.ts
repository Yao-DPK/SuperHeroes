import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroCardComponent } from "./hero-card/hero-card.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroCardComponent, HeroesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHero DB';
}
