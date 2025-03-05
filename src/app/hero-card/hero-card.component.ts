import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-hero-card',
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  title = 'SuperHeroes Card';
  @Input() name: string | undefined;
  @Input() image: string | undefined;
  @Input()powerstats: any;

}
