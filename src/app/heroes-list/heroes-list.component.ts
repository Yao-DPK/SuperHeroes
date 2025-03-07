import { Component, ComponentFactoryResolver, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { map, Observable } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";
import { Router, RouterModule } from '@angular/router'; // Import Router
import { HeroInfosComponent } from '../hero-infos/hero-infos.component';
import { HttpClientModule } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';




@Component({
  selector: 'app-heroes-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    FilterPipe,
    HttpClientModule,
],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
  animations: [
    trigger('progressAnim', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('2s ease-out', style({ width: '{{ finalWidth }}%' })),
      ], { params: { finalWidth: 100 } })
    ])
  ]
})
export class HeroesListComponent implements OnInit {
  heroes: Observable<any> = new Observable();
  filteredHeroes: Observable<any[]> = new Observable();; // This will hold the filtered list of heroes

  numCols: number = 4; // Default number of columns
  rowHeightRatio: string = '4:6'; // Default row height ratio
  gutterSize: string = '10px';  // Default gutter size
  searchText: any = ''; // Model for the search input
  
  heroId: number | undefined;


  constructor(
    private heroesService: HeroesService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadHeroes();
    this.adjustGridSettings();
  }

  loadHeroes(): void {
    this.heroes = this.heroesService.getallHeroes();
  }

  adjustGridSettings(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width < 480) {
        this.numCols = 1;
        this.rowHeightRatio = '1:1';
        this.gutterSize = '10px';
      } else if (width < 960) {
        this.numCols = 2;
        this.rowHeightRatio = '2:2';
        this.gutterSize = '20px';
      } else if (width < 1340) {
        this.numCols = 3;
        this.rowHeightRatio = '3:3';
        this.gutterSize = '30px';
      } else if (width < 1820) {
        this.numCols = 4;
        this.rowHeightRatio = '4:4';
        this.gutterSize = '40px';
      } else {
        this.numCols = 5;
        this.rowHeightRatio = '5:5';
        this.gutterSize = '50px';
      }
    }
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
  this.adjustGridSettings();
  }

  goToHero(id: number): void {
    this.router.navigate(['/heroes', id]);
  }
}
