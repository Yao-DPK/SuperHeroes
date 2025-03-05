import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HeroCardComponent } from "../hero-card/hero-card.component";

@Component({
  selector: 'app-heroes-list',
  imports: [
    CommonModule,
    MatCardModule,
    HeroCardComponent
],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent implements OnInit {
  heroes: Observable<any> = new Observable();

  constructor(
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.heroes = this.heroesService.getallHeroes();
  }

}
