import { RouterModule, Routes } from '@angular/router';
import { HeroInfosComponent } from './hero-infos/hero-infos.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }, // Redirect empty path to '/heroes'
    { path: 'heroes', component: HeroesListComponent}, // List of heroes
    { path: 'heroes/:id', component: HeroInfosComponent}, // Infos of a hero
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}