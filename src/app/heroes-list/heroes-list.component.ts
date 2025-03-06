import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { map, Observable } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HeroCardComponent } from "../hero-card/hero-card.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";



@Component({
  selector: 'app-heroes-list',
  imports: [
    CommonModule,
    MatCardModule,
    HeroCardComponent,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    FilterPipe
],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent implements OnInit {
  heroes: Observable<any> = new Observable();
  filteredHeroes: Observable<any[]> = new Observable();; // This will hold the filtered list of heroes

  numCols: number = 4; // Default number of columns
  rowHeightRatio: string = '4:6'; // Default row height ratio
  gutterSize: string = '10px';  // Default gutter size
  searchText: any = ''; // Model for the search input


  constructor(
    private heroesService: HeroesService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  ngOnInit(): void {
    this.loadHeroes();
    this.adjustGridSettings();
    this.filteredHeroes = this.heroes.pipe(
      map(heroes => heroes.filter((hero: { name: string; }) => 
        hero.name.toLowerCase().includes(this.searchText.toLowerCase())
      ))
    );
  }

  loadHeroes(): void {
    this.heroes = this.heroesService.getallHeroes();
    this.filterHeroes(); // Apply initial filter
  }

  // Example function to update grid settings based on screen size or other factors
  adjustGridSettings(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width < 480) {
        this.numCols = 1;
        this.rowHeightRatio = '1:1';
        this.gutterSize = '5px';
      } else if (width < 768) {
        this.numCols = 2;
        this.rowHeightRatio = '2:1';
        this.gutterSize = '8px';
      } else if (width < 992) {
        this.numCols = 2;
        this.rowHeightRatio = '2:1.25';
        this.gutterSize = '10px';
      } else if (width < 1200) {
        this.numCols = 2;
        this.rowHeightRatio = '2:1.5';
        this.gutterSize = '12px';
      } else {
        this.numCols = 3;
        this.rowHeightRatio = '3:2';
        this.gutterSize = '15px';
      }
    }
  }

  filterHeroes(): void {
    this.filteredHeroes = this.heroes.pipe(
      map(heroes => heroes.filter((hero: { name: string; }) => 
        hero.name.toLowerCase().includes(this.searchText.toLowerCase())
      ))
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
  this.adjustGridSettings();
  }
}
