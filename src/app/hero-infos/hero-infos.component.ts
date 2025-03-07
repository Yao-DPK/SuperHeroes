import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-hero-infos',
  imports: [CommonModule, HttpClientModule, RouterModule, MatButtonModule],
  templateUrl: './hero-infos.component.html',
  styleUrls: ['./hero-infos.component.css']
})
export class HeroInfosComponent implements OnInit {
  heroId!: number;
  hero$!: Observable<Hero>; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.heroId = +params['id']; 
      this.loadHero();
    });
  }

  loadHero(): void {
    this.hero$ = this.heroService.getHero(this.heroId); 
  }

  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}