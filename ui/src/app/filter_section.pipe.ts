import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilterSection' })
export class FilterSectionPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      if (it.desc.toLocaleLowerCase().includes(searchText) || 
        it.name.toLocaleLowerCase().includes(searchText) )
      return it;
    });
  }
}
