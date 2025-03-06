import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: any[], searchText?: string): any[] {
    // Check if there is no input array or search text; if not, return the input as is
    if (!heroes || !searchText) return heroes;

    // Convert search text to lower case for case insensitive comparison
    searchText = searchText.toLowerCase();

    // Filter the heroes array, checking only the 'name' property
    return heroes.filter(hero => hero.name.toLowerCase().includes(searchText));
  }
}
