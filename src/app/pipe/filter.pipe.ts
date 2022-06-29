import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';

@Pipe({ name: 'projectTemplateFilter' })
export class FilterPipe implements PipeTransform {

  templateCount:number;
  constructor(private dataService:DataService){}

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      this.templateCount = 0;
      this.dataService.searchCount.next(this.templateCount);
      return [];
    }
    if (!searchText) {
      this.templateCount = items.length;
      this.dataService.searchCount.next(this.templateCount);
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    this.templateCount = items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    }).length;

    this.dataService.searchCount.next(this.templateCount);

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}