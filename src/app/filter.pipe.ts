import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: any[], searchText?: string): any[] {
    if (!heroes || !searchText) return heroes;

    searchText = searchText.toLowerCase();

    return heroes.filter(hero => hero.name.toLowerCase().includes(searchText));
  }
}
