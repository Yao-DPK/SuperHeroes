import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesListComponent } from "./heroes-list/heroes-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHero DB';
}
