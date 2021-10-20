import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(data: any[], filterValue: string): any[] {
    if (filterValue) {
      return data.filter(v => v.name.toLowerCase().includes(filterValue.toLowerCase()));
    } else {
      return data;
    }
  }
}
